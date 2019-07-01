import moment from 'moment';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { match as matchSchema } from '../../../schema';

// Selectors
import { getMatchEntities, getPlayerEntities, getUserEntities } from '../../../entities/selectors';
import { getByPlayerIdState } from '../selectors';
import { getLimit, getMatchId } from '../../../props/selectors';
import { makeIsFetchingSelector } from '../../../shared/selectors';

// State
export const initialState = {
    ids: [],
    isFetching: false,
    page: 1,
    total: 0
};

const getMatchState = (state, props) =>
    getByPlayerIdState(state, props)
        ? getByPlayerIdState(state, props).match
        : initialState;

export const getIds = (state, props) => getMatchState(state, props).ids;

export const getIsFetching = makeIsFetchingSelector(getMatchState);

export const getPage = (state, props) => getMatchState(state, props).page;

export const getTotal = (state, props) => getMatchState(state, props).total;

// Normalized
export const getMatchEntity = (state, props) => getMatchEntities(state)[getMatchId(null, props)];

// Memoized
export const makeGetHasMore = () => createSelector(
    [getIds, getTotal],
    (ids, total) => ids.length < total
);

export const makeGetMatch = () => createSelector(
    [getMatchEntity, getPlayerEntities, getUserEntities],
    (match, players, users) => {
        if (!match) {
            return undefined;
        }

        return denormalize(
            match.id,
            matchSchema,
            {disputes: {}, matches: {[match.id]: match}, players, users}
        );
    }
);  

export const makeGetMatches = () => createSelector(
    [getIds, getLimit, getMatchEntities, getPlayerEntities, getUserEntities],
    (ids, limit, matches, players, users) => {
        const denormalizedMatches = denormalize(
            limit ? ids.slice(0, limit) : ids,
            [matchSchema],
            {disputes: {}, matches, players, users}
        );

        if (limit) {
            return denormalizedMatches;
        }

        const matchesByDate = denormalizedMatches.reduce((acc, match) => {
            const date = moment(match.created).format('dddd Do');
            const matches = acc[date] ? acc[date]['matches'] : []; 

            return {
                ...acc,
                [date]: {
                    date,
                    matches: [
                        ...matches,
                        match
                    ]
                }
            };
        }, {});

        return Object.keys(matchesByDate).map(date => matchesByDate[date]);
    }
);
