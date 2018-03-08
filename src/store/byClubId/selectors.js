export const getMatchByClubId = (state, props) => state.byClubId[props.match.params.clubId].match;

export const getPlayerByClubId = (state, props) => state.byClubId[props.match.params.clubId].player;
