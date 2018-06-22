import PropTypes from 'prop-types';
import React from 'react';

const ClubsList = ({ clubId, clubs, handleClick }) => (
    <div className="u-ph-1bl u-vspace-1px">
        {clubs.map(club =>
            <li
                key={club.id}
                className={`o-fade-inactive u-bgcolor-fold u-pos-relative ${club.id == clubId && 'o-fade-inactive--active'}`}
            >
                {club.id === clubId &&
                    <div className="o-absfill u-borrad-inherit u-shadow-you u-pointer-none"></div>
                }
                <button
                    className="u-width-100pc u-pv-1bl u-ph-1bl u-vspace-03r"
                    onClick={() => handleClick(club.id)}
                >
                    <dt className="u-color-paste u-weight-bold">{club.name}</dt>

                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span>{club.player_count} player{club.player_count !== 1 ? 's' : ''}</span>

                        <span>
                            {club.last_played_in_days !== null
                                ? club.last_played_in_days > 0
                                    ? `${club.last_played_in_days} day${club.last_played_in_days !== 1 ? 's' : ''} since you've played`
                                    : 'You played today'
                                : 'Get your first match in!'
                            }
                        </span>
                    </dd>
                </button>
            </li>
        )}
    </div>
);

ClubsList.propTypes = {
    clubId: PropTypes.number,
    clubs: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ClubsList;
