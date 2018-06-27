import PropTypes from 'prop-types';
import React from 'react';

// Components
import ClubItem from '../items/ClubItem';

const ClubsList = ({ clubId, clubs, handleClick }) => (
    <ol className="u-ph-1bl u-vspace-1px">
        {clubs.map(club =>
            <li
                key={club.id}
                className={`o-fade-inactive u-bgcolor-fold u-pos-relative ${club.id === clubId && 'o-fade-inactive--active'}`}
            >
                <ClubItem
                    club={club}
                    clubId={clubId}
                    handleClick={handleClick}
                />
            </li>
        )}
    </ol>
);

ClubsList.propTypes = {
    clubId: PropTypes.number,
    clubs: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ClubsList;
