import {
    getMatchParams,
    getChallengeId,
    getDisputeId,
    getMatchId,
    getPlayerId,
    getFilter,
    getLimit } from '../../../store/props/selectors';

describe('selectors', () => {
    it('getMatchParams', () => {
        const props = {
            match: {
                params: {
                    clubId: '1'
                }
            }
        };

        const expected = {
            clubId: '1'
        };

        expect(getMatchParams({}, props)).toEqual(expected);
    });

    it('getChallengeId', () => {
        const props = {
            match: {
                params: {
                    challengeId: '1'
                }
            }
        };

        const expected = 1;

        expect(getChallengeId({}, props)).toEqual(expected);
        expect(getChallengeId({}, {challengeId: 1})).toEqual(expected);
    });

    it('getDisputeId', () => {
        const props = {
            match: {
                params: {
                    disputeId: '1'
                }
            }
        };

        const expected = 1;

        expect(getDisputeId({}, props)).toEqual(expected);
        expect(getDisputeId({}, {disputeId: 1})).toEqual(expected);
    });

    it('getMatchId', () => {
        const props = {
            match: {
                params: {
                    matchId: '1'
                }
            }
        };

        const expected = 1;

        expect(getMatchId({}, props)).toEqual(expected);
        expect(getMatchId({}, {matchId: 1})).toEqual(expected);
    });

    it('getPlayerId', () => {
        const props = {
            match: {
                params: {
                    playerId: '1'
                }
            }
        };

        const expected = 1;

        expect(getPlayerId({}, props)).toEqual(expected);
        expect(getPlayerId({}, {playerId: 1})).toEqual(expected);
    });

    it('getFilter', () => {
        const props = {
            filter: 'all'
        };

        const expected = 'all';

        expect(getFilter({}, props)).toEqual(expected);
    });

    it('getLimit', () => {
        const props = {
            limit: 3
        };

        const expected = 3;

        expect(getLimit({}, props)).toEqual(expected);
    });
});
