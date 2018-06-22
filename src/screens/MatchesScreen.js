import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import DatedMatchesList from '../components/lists/DatedMatchesList';
import Template from '../components/shared/Template';

// Containers
import MatchesListContainer from '../containers/lists/MatchesListContainer';
import LoadMoreMatchesControlContainer from '../containers/controls/LoadMoreMatchesControlContainer';

const MatchesScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl">
            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Club Matches</h1>
                <h2 className="u-size-h4 u-line-error">Who’s been collecting scalps lately?</h2>
            </div>

            <Link to="/matches/add" className="c-button c-button--default u-mt-2bl">Add match</Link>
        </header>

        <hr className="c-hr" />

        <MatchesListContainer
            component={DatedMatchesList}
            playerId="all"
        />

        <div className="o-container">
            <LoadMoreMatchesControlContainer playerId="all" />
        </div>

        <Footer />
    </Template>
);

export default MatchesScreen;
