// Actions
import { createClubSuccess } from '../../../src/store/club/actions';
import * as actions from '../../../src/store/user/actions';

// Reducers
import reducers from '../../../src/store/user/reducers';

describe('initial state', () => {
    it('shape', () => {
        const expected = {
            clubId: null,
            id: null,
            isLoading: true
        };

        expect(reducers(undefined, {})).toEqual(expected);
    });
});

describe('activateAccount', () => {
    it(actions.activateAccountSuccess.toString(), () => {
        const state = {
            clubId: null,
            id: null,
            isLoading: false
        };

        const payload = {
            result: 1,
            entities: {
                users: {1: {id: 1, players: [3]}},
                players: {3: {id: 3, club_id: 2, user_id: 1}}
            }
        };

        const expected = {
            clubId: 2,
            id: 1,
            isLoading: false
        };

        expect(reducers(state, actions.activateAccountSuccess(payload))).toEqual(expected);
    });
});

describe('createClub', () => {
    it(createClubSuccess.toString(), () => {
        const state = {
            clubId: null,
            id: null,
            isLoading: false
        };

        const payload = {
            result: 1,
            entities: {
                clubs: {
                    1: {founder_id: 2}
                }
            }
        };

        const expected = {
            clubId: 1,
            id: 2,
            isLoading: false
        };

        expect(reducers(state, createClubSuccess(payload))).toEqual(expected);
    });
});

describe('fetchCurrentUser', () => {
    it(actions.fetchCurrentUserRequest.toString(), () => {
        const state = {
            clubId: null,
            id: null,
            isLoading: false
        };

        const expected = {
            clubId: null,
            id: null,
            isLoading: true
        };

        expect(reducers(state, actions.fetchCurrentUserRequest())).toEqual(expected);
    });

    it(actions.fetchCurrentUserFailure.toString(), () => {
        const state = {
            clubId: null,
            id: null,
            isLoading: true
        };

        const expected = {
            clubId: null,
            id: null,
            isLoading: false
        };

        expect(reducers(state, actions.fetchCurrentUserFailure())).toEqual(expected);
    });

    it(actions.fetchCurrentUserSuccess.toString() + ' without clubId', () => {
        const state = {
            clubId: null,
            id: null,
            isLoading: true
        };

        const payload = {
            result: 1,
            entities: {
                users: {1: {id: 1, players: [3]}},
                players: {3: {id: 3, club_id: 2, user_id: 1}}
            }
        };

        const expected = {
            clubId: 2,
            id: 1,
            isLoading: false
        };

        expect(reducers(state, actions.fetchCurrentUserSuccess(payload))).toEqual(expected);
    });

    it(actions.fetchCurrentUserSuccess.toString() + ' with clubId', () => {
        const state = {
            clubId: 1,
            id: null,
            isLoading: true
        };

        const payload = {
            result: 1,
            entities: {
                users: {1: {id: 1, players: [3]}},
                players: {3: {id: 3, club_id: 2, user_id: 1}}
            }
        };

        const expected = {
            clubId: 1,
            id: 1,
            isLoading: false
        };

        expect(reducers(state, actions.fetchCurrentUserSuccess(payload))).toEqual(expected);
    });
});

describe('signIn', () => {
    it(actions.signInSuccess.toString() + ' without clubId', () => {
        const state = {
            clubId: null,
            id: null,
            isLoading: false
        };

        const payload = {
            result: 1,
            entities: {
                users: {1: {id: 1, players: [3]}},
                players: {3: {id: 3, club_id: 2, user_id: 1}}
            }
        };

        const expected = {
            clubId: 2,
            id: 1,
            isLoading: false
        };

        expect(reducers(state, actions.signInSuccess(payload))).toEqual(expected);
    });

    it(actions.signInSuccess.toString() + ' with clubId', () => {
        const state = {
            clubId: 1,
            id: null,
            isLoading: false
        };

        const payload = {
            result: 1,
            entities: {
                users: {1: {id: 1, players: [3]}},
                players: {3: {id: 3, club_id: 2, user_id: 1}}
            }
        };

        const expected = {
            clubId: 1,
            id: 1,
            isLoading: false
        };

        expect(reducers(state, actions.signInSuccess(payload))).toEqual(expected);
    });
});
