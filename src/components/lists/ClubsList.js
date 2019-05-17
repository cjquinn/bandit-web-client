import PropTypes from 'prop-types';
import React from 'react';

// Components
import ClubItem from '../items/ClubItem';
import Loading from '../shared/Loading';

const ClubsList = ({ clubId, clubs, handleClick }) => {
    if (clubs.length === 0) {
        if (isFetching) {
          return <Loading />;
        }
      
        return (
            <div className="c-notification c-notification--alert">
                <p className="u-weight-bold">
                    You aren't a part of any clubs.
                </p>
            </div>
        );
    }

    return (
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
};

ClubsList.propTypes = {
    clubId: PropTypes.number,
    clubs: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default ClubsList;
