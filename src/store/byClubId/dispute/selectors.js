import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

// Schema
import { dispute as disputeSchema } from '../../schema';

// Selectors
import { getByClubIdState } from '../selectors';
import { getMatchEntities } from '../byPlayerId/match/selectors';
import { getPlayerEntities } from '../player/selectors';
import { makeIsFetchingSelector } from '../../shared/selectors';
import { getUserEntities } from '../../user/selectors';

export const initialState = {
    ids: [],
    isFetching: false
};

// Normalized
export const getDisputeEntity = (state, props) => state.entities.disputes[props.disputeId];

export const getDisputeEntities = state => state.entities.disputes;

// State
const getDisputeState = (state, props) =>
    getByClubIdState(state, props)
        ? getByClubIdState(state, props).dispute
        : initialState;

export const getIds = (state, props) => getDisputeState(state, props).ids;

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
