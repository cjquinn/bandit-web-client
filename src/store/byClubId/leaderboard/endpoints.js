import { instance } from '../../api';

const PERIOD_MAP = {
    allTime: 'all-time',
    weekly: 'weekly'
};

export const fetchLeaderboard = (clubId, period) => instance().get(`/clubs/${clubId}/leaderboards/${PERIOD_MAP[period]}.json`);
