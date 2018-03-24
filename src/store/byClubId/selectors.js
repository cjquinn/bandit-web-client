export const getByPlayerIdByClubId = (state, props) => state.byClubId[props.match.params.clubId].byPlayerId;

export const getPlayerByClubId = (state, props) => state.byClubId[props.match.params.clubId].player;
