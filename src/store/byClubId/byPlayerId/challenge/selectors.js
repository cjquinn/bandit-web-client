import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { challenge as challengeSchema } from '../../../schema';

// Selectors
import { getChallengeEntities, getPlayerEntities, getUserEntities } from '../../../entities/selectors';
import { getByPlayerIdState } from '../selectors';
import { getFilter, getChallengeId } from '../../../props/selectors';
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

const getFilterState = (state, props) =>
    getChallengeState(state, props)
        ? getChallengeState(state, props)[getFilter(null, props)]
        : initialState;

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

        return denormalize(
            challenge.id,
            challengeSchema,
            {challenges: {[challenge.id]: challenge}, players, users}
        );
    }
);  

export const makeGetChallenges = () => createSelector(
    [getIds, getChallengeEntities, getPlayerEntities, getUserEntities],
    (ids, challenges, players, users) => 
        denormalize(
            ids,
            [challengeSchema],
            {challenges, players, users}
        )
);
