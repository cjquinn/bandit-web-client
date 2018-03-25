import { instance } from '../../../api';

export const addMatch = (clubId, data) => instance().post(`/clubs/${clubId}/matches.json`, data);

export const deleteMatch = (clubId, matchId) => instance().delete(`/clubs/${clubId}/matches/${matchId}.json`);

export const fetchMatch = (clubId, matchId) => instance().get(`/clubs/${clubId}/matches/${matchId}.json`);

export const fetchMatches = (clubId, playerId, page) => instance().get(`/clubs/${clubId}/matches.json?page=${page}&player_id=${playerId}`);
