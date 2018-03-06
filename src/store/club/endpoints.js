import { instance } from '../api';

export const createClub = data => instance().post('/clubs.json', data);

export const fetchClub = id => instance().get(`/clubs/${id}.json`);

export const fetchClubs = () => instance().get('/clubs.json');

export const updateClub = (id, data) => instance().put(`/clubs/${id}.json`, data);
