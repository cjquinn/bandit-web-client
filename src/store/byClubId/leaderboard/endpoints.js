import { instance } from '../../api';

const PERIOD_MAP = {
    allTime: 'all-time',
    unranked: 'unranked',
    weekly: 'weekly'
};

export const fetchLeaderboard = (clubId, period) => instance().get(`/clubs/${clubId}/leaderboards/${PERIOD_MAP[period]}.json`);
