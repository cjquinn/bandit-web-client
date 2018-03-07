export const getPlayerByClubId = (state, props) => state.byClubId[props.match.params.clubId].player;
