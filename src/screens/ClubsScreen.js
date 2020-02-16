import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import ClubsListContainer from '../containers/lists/ClubsListContainer';

const ClubsScreen = () => (
    <>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Clubs</h1>
            <h2 className="u-size-h4">Jump into a different tribe.</h2>
        </header>

        <hr className="c-hr" />

        <section className="o-container u-vspace-3bl">
            <ClubsListContainer />

            <div className="u-ph-1bl">
                <Link
                    to="/clubs/create"
                    className="c-button c-button--default"
                >
                    Create a club
                </Link>
            </div>
        </section>

        <FooterContainer/>
    </>
);

export default ClubsScreen;
