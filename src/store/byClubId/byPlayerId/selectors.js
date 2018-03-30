import { getByClubIdState } from '../selectors';

export const getByPlayerIdState = (state, props) => getByClubIdState(state, props).byPlayerId[props.match.params.playerId];
