import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

// Containers
import PlayersListContainer from '../containers/lists/PlayersListContainer';

const PlayersScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl">
            <div className="u-flex u-ai-center u-jc-between">
                <div className="u-vspace-06r">
                    <h1 className="u-size-h1 u-color-white">Club Players</h1>

                    <h2 className="u-size-h4">Who to play ball with?</h2>
                </div>
            </div>
        </header>

        <hr className="c-hr" />

        <section className="o-container u-vspace-2bl">
            <div className="u-flex u-jc-between u-ph-1bl">
                <Link
                    to="/players/invite"
                    className="c-go"
                >
                    Invite player
                </Link>

                <select className="u-color-playdough">
                    <option selected="">A &ndash; Z</option>
                    <optgroup label="Order players:">
                        <option>Highest Rating</option>
                        <option>Most Games</option>
                    </optgroup>
                </select>

            </div>

            <PlayersListContainer />

            <footer className="u-ph-1bl">
                <a href="/matches" className="c-button c-button--default u-mt-1bl">Load more&hellip;</a>
            </footer>

        </section>

        <Footer />

    </Template>
);

export default PlayersScreen;
