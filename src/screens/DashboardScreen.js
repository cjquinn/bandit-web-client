import React from 'react';

// Components
import Template from '../components/Template';
import Disputes from '../components/Disputes';

const DashboardScreen = () => (
    <Template>

        <main className="o-main">

            <Disputes />

            <section id="matches" className="o-container">

                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h2 u-color-white">Matches</h1>
                    <a href="/matches.php" className="c-go u-color-playdough">go to</a>
                </header>

                <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    {/* 
                    <?php

                        for ($i = 1; $i < 4; $i++) {
                            include('components/result-row.php');
                        }

                    ?>
                    */}
                </ol>

                <footer className="u-ph-1bl">
                    <a href="/add-matches.php" className="c-button c-button--default u-mt-1bl">Add Matches</a>
                </footer>

            </section>

            <section id="weekly-leaderboard" className="o-container">

                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h2 u-color-white">Weekly <span className="u-color-steam">leaderboard</span></h1>
                    <a href="/leaderboards.php" className="c-go u-color-playdough">go to</a>
                </header>

                <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    {/* 
                    <?php

                        for ($i = 1; $i < 4; $i++) {
                            include('components/weekly-leaderboard-row.php');
                        }

                    ?>
                    */ }
                </ol>

            </section>

            <section id="alltime-leaderboard" className="o-container">

                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h2 u-color-white">All time <span className="u-color-steam">leaderboard</span></h1>
                    <a href="/leaderboards.php" className="c-go u-color-playdough">go to</a>
                </header>

                <ol className="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">

                    {/* 
                    <?php

                        for ($i = 1; $i < 4; $i++) {
                            include('components/alltime-leaderboard-row.php');
                        }

                    ?>
                    */}
                </ol>

            </section>

        </main>

    </Template>
);

export default DashboardScreen;
