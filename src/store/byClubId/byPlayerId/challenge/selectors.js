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
    [getIds, getPlayerId, getChallengeEntities, getPlayerEntities, getUserEntities],
    (ids, playerId, challenges, players, users) => {
        let denormalizedChallenges = denormalize(
            ids,
            [challengeSchema],
            {challenges, players, users}
        );

        denormalizedChallenges = denormalizedChallenges
            .map(challenge => ({
                ...challenge,
                moment: moment(challenge.match_datetime)
            }));

        // Specific player returns list of challenges
        if (playerId !== 'all') {
            return denormalizedChallenges;
        }

        // Only upcoming challenges
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
            }
        };

        denormalizedChallenges.forEach(challenge => {
            const week = challenge.moment.format('W');

            const period = week === thisWeek
                ? 'thisWeek'
                : week === nextWeek
                    ? 'nextWeek'
                    : 'further';

            challengesByPeriod[period].challenges.push(challenge);
        });

        return Object.keys(challengesByPeriod).map(period => challengesByPeriod[period]);
    }
);
