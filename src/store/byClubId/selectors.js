// Api
import { getClubId } from '../api';

export const getByClubIdState = state => state.byClubId[getClubId()];
