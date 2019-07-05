import moment from 'moment';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { challenge as challengeSchema } from '../../../schema';

// Selectors
import { getChallengeEntities, getPlayerEntities, getUserEntities } from '../../../entities/selectors';
import { getByPlayerIdState } from '../selectors';
import { getChallengeId, getPrimaryFilter, getSecondaryFilter } from '../../../props/selectors';
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

const getPrimaryFilterState = (state, props) =>
    getChallengeState(state, props)
        ? getChallengeState(state, props)[getPrimaryFilter(null, props)]
        : initialState;

export const getIds = (state, props) => getPrimaryFilterState(state, props).ids;

export const getIsFetching = makeIsFetchingSelector(getPrimaryFilterState);

// Normalized
export const getChallengeEntity = (state, props) => getChallengeEntities(state)[getChallengeId(null, props)];

// Memoized
export const makeGetChallenge = () => createSelector(
    [getChallengeEntity, getPlayerEntities, getUserEntities],
    (challenge, players, users) => {
        if (!challenge) {
            return undefined;
        }

        return denormalize(
            challenge.id,
            challengeSchema,
            {challenges: {[challenge.id]: challenge}, players, users}
        );
    }
);

export const makeGetChallenges = () => createSelector(
    [getIds, getPrimaryFilter, getSecondaryFilter, getChallengeEntities, getPlayerEntities, getUserEntities],
    (ids, primaryFilter, secondaryFilter, challenges, players, users) => {
        const secondaryFilterTest = secondaryFilter === 'open'
            ? ({ player_b_id }) => player_b_id === null
            : ({ player_b_id }) => player_b_id !== null;

        let denormalizedChallenges = denormalize(
            ids,
            [challengeSchema],
            {challenges, players, users}
        );

        denormalizedChallenges = denormalizedChallenges
            .filter(secondaryFilterTest)
            .map(challenge => ({
                ...challenge,
                moment: moment(challenge.match_datetime)
            }));

        console.log(denormalizedChallenges);

        // All challenges
        if (primaryFilter !== 'upcoming') {
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
