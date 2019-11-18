import moment from 'moment';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { challenge as challengeSchema } from '../../../schema';

// Selectors
import { getChallengeEntities, getPlayerEntities, getUserEntities } from '../../../entities/selectors';
import { getByPlayerIdState } from '../selectors';
import { getChallengeId, getFilter, getPlayerId } from '../../../props/selectors';
import { makeIsFetchingSelector } from '../../../shared/selectors';
import { getCurrentPlayerId } from '../../../user/selectors';

// State
export const initialState = {
    ids: [],
    isFetching: false
};

const getChallengeState = (state, props) =>
    getByPlayerIdState(state, props)
        ? getByPlayerIdState(state, props).challenge
        : undefined;

const getFilterState = (state, props) => {
    const challenge = getChallengeState(state, props);
    const filter = getFilter(null, props);

    return challenge && challenge[filter]
        ? challenge[filter]
        : initialState;
};

export const getIds = (state, props) => getFilterState(state, props).ids;

export const getIsFetching = makeIsFetchingSelector(getFilterState);

// Normalized
export const getChallengeEntity = (state, props) => getChallengeEntities(state)[getChallengeId(null, props)];

// Memoized
export const getChallengeOptions = createSelector(
    [getIds, getCurrentPlayerId, getChallengeEntities, getPlayerEntities, getUserEntities],
    (ids, currentPlayerId, challenges, players, users) => {
        const denormalizedChallenges = denormalize(
            ids,
            [challengeSchema],
            {challenges, players, users}
        );

        const challengeOptions = [];

        for (let i = 0; i < denormalizedChallenges.length; i++) {
            const challenge = denormalizedChallenges[i];

            const otherPlayer = challenge.player_a_id === currentPlayerId
                ? challenge.player_b
                : challenge.player_a;

            challengeOptions.push({
                value: challenge.id,
                text: `${otherPlayer.user.full_name} - ${moment(challenge.match_datetime).format('dddd HH:mm - Do MMMM')}`
            });
        }

        return challengeOptions;
    }
);

export const makeGetChallenge = () => createSelector(
    [getChallengeEntity, getPlayerEntities, getUserEntities],
    (challenge, players, users) => {
        if (!challenge) {
            return undefined;
        }

        return {
            ...denormalize(
                challenge.id,
                challengeSchema,
                {challenges: {[challenge.id]: challenge}, players, users}
            ),
            moment: moment(challenge.match_datetime)
        };
    }
);

export const makeGetChallenges = () => createSelector(
    [getIds, getChallengeEntities, getPlayerEntities, getUserEntities],
    (ids, challenges, players, users) =>
        denormalize(
            ids,
            [challengeSchema],
            {challenges, players, users}
        ).map(challenge => ({
            ...challenge,
            moment: moment(challenge.match_datetime)
        }))
);

export const makeGetChallengesByPeriod = () => createSelector(
    [makeGetChallenges()],
    challenges => {
        const m = moment();

        const thisWeek = m.format('W');
        const nextWeek = m.add(1, 'week').format('W');

        const challengesByPeriod = {
            thisWeek: {
                period: 'This Week',
                challenges: []
            },
            nextWeek: {
                period: 'Next Week',
                challenges: []
            },
            further: {
                period: 'Further',
                challenges: []
            },
            length: challenges.length
        };

        challenges.forEach(challenge => {
            const week = challenge.moment.format('W');

            const period = week === thisWeek
                ? 'thisWeek'
                : week === nextWeek
                    ? 'nextWeek'
                    : 'further';

            challengesByPeriod[period].challenges.push(challenge);
        });

        return challengesByPeriod;
    }
);
