import { getByClubIdState } from '../selectors';

// Selectors
import { getPlayerId } from '../../props/selectors';

export const getByPlayerIdState = (state, props) =>
    getByClubIdState(state)
        ? getByClubIdState(state).byPlayerId[getPlayerId(null, props)]
        : undefined;
