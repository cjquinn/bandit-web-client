import moment from 'moment';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

// Schema
import { match as matchSchema } from '../../../schema';

// Selectors
import { getMatchEntities, getPlayerEntities, getUserEntities } from '../../../entities/selectors';
import { getByPlayerIdState } from '../selectors';
import { getLimit, getMatchId } from '../../../props/selectors';
import { getBanditId, makeIsFetchingSelector } from '../../../shared/selectors';

// Utilities
import { withIsBandit } from '../../../utilities';

export const initialState = {
    ids: [],
    isFetching: false,
    page: 1,
    total: 0
};

// Normalized
export const getMatchEntity = (state, props) => getMatchEntities(state)[getMatchId(null, props)];

// State
const getMatchState = (state, props) =>
    getByPlayerIdState(state, props)
        ? getByPlayerIdState(state, props).match
        : initialState;

export const getIds = (state, props) => getMatchState(state, props).ids;

export const getIsFetching = makeIsFetchingSelector(getMatchState);

export const getPage = (state, props) => getMatchState(state, props).page;

// Memoized
export const makeGetMatch = () => createSelector(
    [getBanditId, getMatchEntity, getPlayerEntities, getUserEntities],
    (banditId, match, players, users) => {
        if (!match) {
            return undefined;
        }

        const denormalizedMatch = denormalize(
            match.id,
            matchSchema,
            {disputes: {}, matches: {[match.id]: match}, players, users}
        );

        return {
            ...denormalizedMatch,
            player_a: withIsBandit(denormalizedMatch.player_a, banditId),
            player_b: withIsBandit(denormalizedMatch.player_b, banditId)
        };
    }
);  

export const makeGetMatches = () => createSelector(
    [getIds, getLimit, getBanditId, getMatchEntities, getPlayerEntities, getUserEntities],
    (ids, limit, banditId, matches, players, users) => {
        const denormalizedMatches = denormalize(
            limit ? ids.slice(0, limit) : ids,
            [matchSchema],
            {disputes: {}, matches, players, users}
        );

        if (limit) {
            return denormalizedMatches.map(match => ({
                ...match,
                player_a: withIsBandit(match.player_a, banditId),
                player_b: withIsBandit(match.player_b, banditId)
            }));
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
                        {
                            ...match,
                            player_a: withIsBandit(match.player_a, banditId),
                            player_b: withIsBandit(match.player_b, banditId)
                        }
                    ]
                }
            };
        }, {});

        return Object.keys(matchesByDate).map(date => matchesByDate[date]);
    }
);
