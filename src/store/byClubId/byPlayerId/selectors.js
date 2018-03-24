import { getByPlayerIdByClubId } from '../selectors';

export const getMatchByPlayerId = (state, props) => getByPlayerIdByClubId(state, props)[props.match.params.playerId].match;
