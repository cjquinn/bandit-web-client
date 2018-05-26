import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const ClubsList = ({ clubId, clubs }) => (
    <div className="u-ph-1bl u-vspace-1px">
        {clubs.map(club =>
            <li
                key={club.id}
                className={`u-bgcolor-fold u-pos-relative ${club.id !== clubId && 'u-opac-05 u-opac-1@hover'}`}
            >
                {club.id === clubId &&
                    <div className="o-absfill u-borrad-inherit u-shadow-you u-pointer-none"></div>
                }
                <Link
                    to={`/clubs/${club.id}`}
                    className="u-flex u-ai-center u-pv-1bl u-ph-1bl"
                >
                    <div className="u-grow-1 u-vspace-03r">
                        <dt className="u-color-paste u-weight-bold">{club.name}</dt>

                        <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                            <span>48 players</span>
                            <span>11 days since you&apos;ve played</span>
                        </dd>
                    </div>
                </Link>
            </li>
        )}
    </div>
);

ClubsList.propTypes = {
    clubId: PropTypes.number,
    clubs: PropTypes.array.isRequired
};

export default ClubsList;
