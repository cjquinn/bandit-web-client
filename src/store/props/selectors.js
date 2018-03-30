export const getMatchParams = (_, props) => props.match.params;

export const getClubId = (_, props) => props.clubId ? props.clubId : getMatchParams(_, props).clubId;

export const getDisputeId = (_, props) => props.disputeId ? props.disputeId : getMatchParams(_, props).disputeId;

export const getMatchId = (_, props) => props.matchId ? props.matchId : getMatchParams(_, props).matchId;

export const getPlayerId = (_, props) => props.playerId ? props.playerId : getMatchParams(_, props).playerId;

export const getLimit = (_, props) => props.limit;
