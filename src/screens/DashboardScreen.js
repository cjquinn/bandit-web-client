import React from 'react';

// Components
import Template from '../components/Template';
import Disputes from '../components/Disputes';

const DashboardScreen = () => (
    <Template>

        <main class="o-main">

            <Disputes />

            <section id="matches" class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">Matches</h1>
                    <a href="/matches.php" class="c-go u-color-playdough">go to</a>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    {/* 
                    <?php

                        for ($i = 1; $i < 4; $i++) {
                            include('components/result-row.php');
                        }

                    ?>
                    */}
                </ol>

                <footer class="u-ph-1bl">
                    <a href="/add-matches.php" class="c-button c-button--default u-mt-1bl">Add Matches</a>
                </footer>

            </section>

            <section id="weekly-leaderboard" class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">Weekly <span class="u-color-steam">leaderboard</span></h1>
                    <a href="/leaderboards.php" class="c-go u-color-playdough">go to</a>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">
                    {/* 
                    <?php

                        for ($i = 1; $i < 4; $i++) {
                            include('components/weekly-leaderboard-row.php');
                        }

                    ?>
                    */ }
                </ol>

            </section>

            <section id="alltime-leaderboard" class="o-container">

                <header class="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 class="u-size-h2 u-color-white">All time <span class="u-color-steam">leaderboard</span></h1>
                    <a href="/leaderboards.php" class="c-go u-color-playdough">go to</a>
                </header>

                <ol class="u-mt-1bl u-vspace-1px u-borrad-first-2200 u-borrad-last-0022">

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
