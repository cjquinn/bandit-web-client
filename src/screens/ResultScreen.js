import React from 'react';

// Components
import Template from '../components/Template';
import PlayerPhoto from '../components/PlayerPhoto';

const ResultScreen = () => (
    <Template>
        <main class="o-main">

<div class="o-container u-ph-1bl u-vspace-2bl">

    <a href="/matches.php" class="u-color-playdough">Back to Matches</a>

</div>

<hr class="c-hr" />

<section class="o-container u-vspace-3bl">

    <div class="u-vspace-2bl">

        <dl class="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220">
            <li class="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold u-vspace-1bl">

                <a href="/single-player.php">
                    
<div class="u-pos-relative" aria-hidden="true">


<div class="c-player-photo u-width-4bl" >
<div class="c-player-photo__level u-bgcolor-fighter"></div>

</div>
</div>

                </a>

                <dt>
                    <h2 class="u-color-paste"><a href="/single-player.php">Teddy Brompsky</a></h2>
                </dt>

                <dd>
                    <p class="u-size-h1 u-color-white">3</p>
                </dd>

            </li>

            <li class="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold05 u-vspace-1bl">

                <a href="/single-player.php">
                    <PlayerPhoto />
                </a>

                <dt>
                    <h2 class="u-color-paste"><a href="/single-player.php">Angelica Thompson</a></h2>
                </dt>

                <dd>
                    <p class="u-size-h1 u-color-white">2</p>
                </dd>

            </li>
        </dl>

        <dl class="u-flex u-jc-between u-ph-1bl">

            <li class="u-flex u-ai-center u-hspace-05bl">
                <dt>Submitted by </dt>
                <dd>
<div class="u-pos-relative" aria-hidden="true">

<div class="c-player-photo u-width-2bl" >
<div class="c-player-photo__level u-bgcolor-knight"></div>

</div>
</div>

<span class="o-dictate">Christy Quinn</span></dd>
            </li>

            <li>
                <dt class="o-dictate">Submitted on </dt>
                <dd>Monday 11th January 2017</dd>
            </li>

        </dl>

    </div>

    <footer class="u-ph-1bl">
        <a href="#open-dispute" class="c-button c-button--warning u-mt-1bl">Dispute match</a>
    </footer>

</section>

<hr class="c-hr" />

<section>

    <section id="open-dispute" class="u-vspace-2bl">

        <div class="o-container u-ph-1bl">

            <header class="u-flex u-jc-between u-ai-center">
                <h1 id="start-dispute" class="u-size-h1 u-color-white">Dispute</h1>

                <a href="#" class="u-color-hotmelon">Cancel</a>
            </header>

        </div>

        <nav class="u-bgcolor-fold u-pt-2bl">
            <ul class="u-flex u-ph-1bl u-hspace-1bl">
                <li class="u-grow-1"><a href="#" class="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-borrad-3300 u-size-h4 u-color-white u-bgcolor-floor">Wrong scores</a></li>
                <li class="u-grow-1"><a href="#" class="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-color-playdough u-color-white@hover u-bgcolor-floor05 u-borrad-3300 u-size-h4">Didn't happen</a></li>
            </ul>
        </nav>

        <div class="o-container u-vspace-3bl">

            <div class="u-vspace-2bl">

                <p class="u-ph-1bl">What <em>were</em> the scores, Christy?</p>

                <div class="u-borrad-first-2200 u-borrad-last-0022">
                    <li class="u-bgcolor-fold">
<div class="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste">

<div class="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center u-hspace-1bl">

<dt class="u-size-h4 u-weight-bold u-ws-no">
    <span class="o-dictate">Teddy Austin </span> <input class="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" /> &ndash; <span class="o-dictate">Angelica Hamlet </span><input class="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" />
</dt>

</div>

<div class="u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left u-hspace-1bl">


<div class="u-pos-relative" aria-hidden="true">


<div class="c-player-photo u-width-3bl" >
<div class="c-player-photo__level u-bgcolor-scout"></div>

</div>
</div>


<span class="o-ellipsis" aria-hidden="true">Teddy</span>


</div>


<div class="u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">

<span class="o-ellipsis" aria-hidden="true">Angelica</span>


<div class="u-pos-relative" aria-hidden="true">


<div class="c-player-photo u-width-3bl" >
<div class="c-player-photo__level u-bgcolor-legendary"></div>

</div>
</div>


</div>

</div>
</li>
                </div>

            </div>

            <div class="u-ph-1bl u-vspace-2bl">

                <div class="u-pos-relative u-vspace-2bl">
                    <p class="u-size-h4"><label>Comments:</label></p>
                    <textarea placeholder="Tell us what went down" class="u-width-100pc u-height-5rem"></textarea>
                </div>

                <div class="u-flex u-ai-center u-hspace-05bl u-size-14px">
                    
<div class="u-pos-relative" aria-hidden="true">


<div class="c-player-photo u-width-2bl" >
<div class="c-player-photo__level u-bgcolor-scout"></div>

</div>
</div>

                    <span class="o-dictate">Christy Quinn</span> <span>will have 24 hours to respond to your dispute.</span>
                </div>

                <a href="#start-dispute" class="c-button c-button--default">Start dispute</a>

            </div>

        </div>

    </section>

</section>

<footer>

<hr class="c-hr" />

<div class="o-container u-flex u-jc-between u-ai-center u-ph-1bl u-pv-2bl">

<select class="u-color-playdough">
<option selected="">Britannia Squash</option>
<optgroup label="Switch club:">
    <option>Shoreditch Park Squash</option>
    <option>Coolhurst London Premier League Squash</option>
</optgroup>
</select>

<a href="/invite-player.php" class="u-color-playdough">Invite player</a>

</div>

</footer>

</main>

    </Template>
);

export default ResultScreen;
