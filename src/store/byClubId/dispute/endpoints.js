import { instance } from '../../api';

export const addDispute = (clubId, data) => instance().post(`/clubs/${clubId}/disputes.json`, data);

export const closeDispute = (clubId, disputeId, data) => instance().patch(`/clubs/${clubId}/disputes/${disputeId}.json`, data);

export const deleteDispute = (clubId, disputeId) => instance().delete(`/clubs/${clubId}/disputes/${disputeId}.json`);

export const fetchDisputes = clubId => instance().get(`/clubs/${clubId}/disputes.json`);
