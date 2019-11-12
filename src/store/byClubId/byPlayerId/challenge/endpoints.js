import moment from 'moment';
import { instance } from '../../../api';

export const acceptChallenge = (clubId, challengeId) => instance().patch(`/clubs/${clubId}/challenges/${challengeId}/accept.json`);

export const createChallenge = (clubId, data) => {
    data = {...data};

    if (data.match_datetime) {
        data.match_datetime = moment(data.match_datetime);
    }    

    return instance().post(`/clubs/${clubId}/challenges.json`, data);
};

export const deleteChallenge = (clubId, challengeId) => instance().delete(`/clubs/${clubId}/challenges/${challengeId}.json`);

export const fetchChallenge = (clubId, challengeId) => instance().get(`/clubs/${clubId}/challenges/${challengeId}.json`);

export const fetchChallenges = (clubId, playerId, filter) => instance().get(`/clubs/${clubId}/challenges.json?player_id=${playerId}&filter=${filter}`);

export const reportChallenge = (clubId, challengeId) => instance().patch(`/clubs/${clubId}/challenges/${challengeId}/report.json`);

export const withdrawChallenge = (clubId, challengeId) => instance().patch(`/clubs/${clubId}/challenges/${challengeId}/withdraw.json`);
