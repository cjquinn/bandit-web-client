// Api
import { getClubId } from '../user/selectors';

export const getByClubIdState = state => state.byClubId[getClubId(state)];
