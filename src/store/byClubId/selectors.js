// Api
import { getClubId } from '../shared/selectors';

export const getByClubIdState = state => state.byClubId[getClubId(state)];
