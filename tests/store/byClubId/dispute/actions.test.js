import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Actions
import * as actions from '../../../../src/store/byClubId/dispute/actions';
import { SIGN_OUT } from '../../../../src/store/user/actions';

const clubId = 1;
const mock = new MockAdapter(axios);
let store;

describe('addDispute', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onPost(`/clubs/${clubId}/disputes.json`)
            .reply(403);

        return store.dispatch(actions.addDispute())
            .then(() => {
                const expected = [
                    {type: actions.addDisputeRequest.toString()},
                    {type: actions.addDisputeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPost(`/clubs/${clubId}/disputes.json`)
            .reply(200, {dispute: {match_id: 1}});

        return store.dispatch(actions.addDispute())
            .then(() => {
                const expected = [
                    {type: actions.addDisputeRequest.toString()},
                    {
                        type: actions.addDisputeSuccess.toString(),
                        payload: {
                            clubId,
                            result: 1,
                            entities: {
                                disputes: {
                                    1: {match_id: 1, match: 1}
                                }
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('closeDispute', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    const disputeId = 1;

    it('failure', () => {
        mock
            .onPatch(`/clubs/${clubId}/disputes/${disputeId}.json`)
            .reply(403);

        return store.dispatch(actions.closeDispute(disputeId))
            .then(() => {
                const expected = [
                    {type: actions.closeDisputeRequest.toString()},
                    {type: actions.closeDisputeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onPatch(`/clubs/${clubId}/disputes/${disputeId}.json`)
            .reply(200, {
                club: {id: 1},
                dispute: {match_id: 1},
                matches: [{id: 1, player_a_id: 1, player_b_id: 2}]
            });

        return store.dispatch(actions.closeDispute(disputeId))
            .then(() => {
                const expected = [
                    {type: actions.closeDisputeRequest.toString()},
                    {
                        type: actions.closeDisputeSuccess.toString(),
                        payload: {
                            clubId,
                            result: 1,
                            entities: {
                                clubs: {1: {id: 1}},
                                disputes: {1: {
                                    match_id: 1,
                                    match: 1
                                }},
                                matches: {1: {
                                    id: 1,
                                    player_a_id: 1,
                                    player_b_id: 2,
                                    player_a: 1,
                                    player_b: 2
                                }}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('deleteDispute', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    const disputeId = 1;

    it('failure', () => {
        mock
            .onDelete(`/clubs/${clubId}/disputes/${disputeId}.json`)
            .reply(403);

        return store.dispatch(actions.deleteDispute(disputeId))
            .then(() => {
                const expected = [
                    {type: actions.deleteDisputeRequest.toString()},
                    {type: actions.deleteDisputeFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onDelete(`/clubs/${clubId}/disputes/${disputeId}.json`)
            .reply(200, {dispute: {match_id: 1}});

        return store.dispatch(actions.deleteDispute(disputeId))
            .then(() => {
                const expected = [
                    {type: actions.deleteDisputeRequest.toString()},
                    {
                        type: actions.deleteDisputeSuccess.toString(),
                        payload: {
                            clubId,
                            result: 1,
                            entities: {
                                disputes: {1: {
                                    match_id: 1,
                                    match: 1
                                }}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});

describe('fetchDisputes', () => {
    beforeEach(() => store = global.configureStore({user: {clubId}}));

    afterEach(() => mock.reset());

    it('failure', () => {
        mock
            .onGet(`/clubs/${clubId}/disputes.json`)
            .reply(403);

        return store.dispatch(actions.fetchDisputes())
            .then(() => {
                const expected = [
                    {
                        type: actions.fetchDisputesRequest.toString(),
                        payload: {clubId}
                    },
                    {type: actions.fetchDisputesFailure.toString()},
                    {type: SIGN_OUT}
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });

    it('success', () => {
        mock
            .onGet(`/clubs/${clubId}/disputes.json`)
            .reply(200, {disputes: [{match_id: 1}]});

        return store.dispatch(actions.fetchDisputes())
            .then(() => {
                const expected = [
                    {
                        type: actions.fetchDisputesRequest.toString(),
                        payload: {clubId}
                    },
                    {
                        type: actions.fetchDisputesSuccess.toString(),
                        payload: {
                            clubId,
                            result: [1],
                            entities: {
                                disputes: {1: {
                                    match_id: 1,
                                    match: 1
                                }}
                            }
                        }
                    }
                ];

                expect(store.getActions()).toEqual(expected);
            });
    });
});
