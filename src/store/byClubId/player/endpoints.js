import { instance } from '../../api';

export const fetchPlayer = (clubId, playerId) => instance().get(`/clubs/${clubId}/players/${playerId}.json`);

export const fetchPlayers = clubId => instance().get(`/clubs/${clubId}/players.json`);

export const invitePlayer = (clubId, data) => instance().post(`/clubs/${clubId}/players.json`, data);
