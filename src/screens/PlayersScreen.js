import React from 'react';
import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';

// Containers
import OrderPlayersControlContainer from '../containers/controls/OrderPlayersControlContainer';
import PlayersListContainer from '../containers/lists/PlayersListContainer';

const PlayersScreen = () => (
    <>
        <header className="o-container u-ph-1bl">
            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Players</h1>

                <h2 className="u-size-h4">Who to play ball with?</h2>
            </div>

            <Link
                to="/players/invite"
                className="c-button c-button--default u-mt-2bl"
            >
                Invite player
            </Link>
        </header>

        <hr className="c-hr" />

        <section className="o-container u-vspace-2bl">
            <OrderPlayersControlContainer />

            <PlayersListContainer />
        </section>

        <FooterContainer />
    </>
);

export default PlayersScreen;
