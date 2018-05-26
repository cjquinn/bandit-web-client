export const getMatchParams = (_, props) => props.match ? props.match.params : {};

export const getDisputeId = (_, props) => props.disputeId || getMatchParams(_, props).disputeId;

export const getMatchId = (_, props) => props.matchId || getMatchParams(_, props).matchId;

export const getPlayerId = (_, props) => props.playerId || getMatchParams(_, props).playerId;

export const getLimit = (_, props) => props.limit;
