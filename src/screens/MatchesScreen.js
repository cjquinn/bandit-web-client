import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import DatedMatchesList from '../components/lists/DatedMatchesList';

// Containers
import MatchesListContainer from '../containers/lists/MatchesListContainer';
import LoadMoreMatchesControlContainer from '../containers/controls/LoadMoreMatchesControlContainer';

const MatchesScreen = () => (
    <>
        <header className="o-container u-ph-1bl">
            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Matches</h1>
                <h2 className="u-size-h4 u-line-error">Who’s been collecting scalps lately?</h2>
            </div>

            <Link to="/matches/add" className="c-button c-button--default u-mt-2bl">Add match result</Link>
        </header>

        <hr className="c-hr" />

        <div className="o-container u-vspace-2bl">
            <MatchesListContainer
                component={DatedMatchesList}
                playerId="all"
            />

            <LoadMoreMatchesControlContainer playerId="all" />
        </div>

        <FooterContainer />
    </>
);

export default MatchesScreen;
