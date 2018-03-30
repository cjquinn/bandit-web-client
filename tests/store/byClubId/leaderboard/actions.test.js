import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../../src/store/byClubId/leaderboard/actions';
import { SIGN_OUT } from '../../../../src/store/user/actions';

const clubId = 1;
const period = 'allTime';
const mock = new MockAdapter(axios);
let store;

describe('fetchLeaderboard', () => {
    beforeEach(() => store = global.configureStore());

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/leaderboards/all-time.json`)
            .reply(403);

        return store.dispatch(actions.fetchLeaderboard(clubId, period))
            .then(() => {
                const expected = [
                    {type: actions.fetchLeaderboardRequest.toString()},
                    {type: actions.fetchLeaderboardFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/leaderboards/all-time.json`)
            .reply(200, {players: [{id: 1, rating: 1200}]});

        return store.dispatch(actions.fetchLeaderboard(clubId, period))
            .then(() => {
                const expected = [
                    {type: actions.fetchLeaderboardRequest.toString()},
                    {
                        type: actions.fetchLeaderboardSuccess.toString(),
                        payload: {
                            clubId,
                            period,
                            result: [1],
                            entities: {
                                players: {1: {id: 1, rating: 1200}}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
