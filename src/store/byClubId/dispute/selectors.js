import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { dispute as disputeSchema } from '../../schema';

// Selectors
import { getByClubIdState } from '../selectors';
import { getDisputeEntities, getMatchEntities, getPlayerEntities, getUserEntities } from '../../entities/selectors';
import { getDisputeId } from '../../props/selectors';
import { makeIsFetchingSelector } from '../../shared/selectors';

export const initialState = {
    ids: [],
    isFetching: false
};

// Normalized
export const getDisputeEntity = (state, props) => getDisputeEntities(state)[getDisputeId(null, props)];

// State
const getDisputeState = state =>
    getByClubIdState(state)
        ? getByClubIdState(state).dispute
        : initialState;

export const getIds = state => getDisputeState(state).ids;

export const getIsFetching = makeIsFetchingSelector(getDisputeState);

// Memoized
export const makeGetDispute = () => createSelector(
    [getDisputeEntity, getMatchEntities, getPlayerEntities, getUserEntities],
    (dispute, matches, players, users) =>
        dispute
            ? denormalize(dispute.match_id, disputeSchema, {
                disputes: {[dispute.match_id]: dispute},
                matches,
                players,
                users
            })
            : undefined
);

export const makeGetDisputes = () => createSelector(
    [getIds, getDisputeEntities, getMatchEntities, getPlayerEntities, getUserEntities],
    (ids, disputes, matches, players, users) => denormalize(
        ids,
        [disputeSchema],
        {
            disputes,
            matches,
            players,
            users
        }
    )
);
