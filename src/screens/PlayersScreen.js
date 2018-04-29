import React from 'react';

// Components
import Footer from '../components/Footer';
import Player from '../components/Player';
import Template from '../components/Template';

const PlayersScreen = () => (
    <Template>
        <main className="o-main">

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

                    <select className="u-color-playdough">
                        <option selected="">A &ndash; Z</option>
                        <optgroup label="Order players:">
                            <option>Highest Rating</option>
                            <option>Most Games</option>
                        </optgroup>
                    </select>

                    <a href="/invite-player.php" className="u-color-playdough">Invite player</a>

                </div>

                <ol className="u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                </ol>

                <footer className="u-ph-1bl">
                    <a href="/matches.php" className="c-button c-button--default u-mt-1bl">Load more&hellip;</a>
                </footer>

            </section>

            <Footer />

        </main>

    </Template>
);

export default PlayersScreen;
