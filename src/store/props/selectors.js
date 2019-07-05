export const getMatchParams = (_, props) => props.match ? props.match.params : {};

export const getChallengeId = (_, props) => props.challengeId || getMatchParams(_, props).challengeId;

export const getDisputeId = (_, props) => props.disputeId || getMatchParams(_, props).disputeId;

export const getMatchId = (_, props) => props.matchId || getMatchParams(_, props).matchId;

export const getPlayerId = (_, props) => props.playerId || getMatchParams(_, props).playerId;

export const getLimit = (_, props) => props.limit;

export const getPrimaryFilter = (_, props) => props.primaryFilter;

export const getSecondaryFilter = (_, props) => props.secondaryFilter;
