import React from 'react';

// Components
import Template from '../components/Template';
import PlayerPhoto from '../components/PlayerPhoto';

const ResultScreen = () => (
    <Template>
        <main className="o-main">

<div className="o-container u-ph-1bl u-vspace-2bl">

    <a href="/matches.php" className="u-color-playdough">Back to Matches</a>

</div>

<hr className="c-hr" />

<section className="o-container u-vspace-3bl">

    <div className="u-vspace-2bl">

        <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220">
            <li className="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold u-vspace-1bl">

                <a href="/single-player.php">
                    
<div className="u-pos-relative" aria-hidden="true">


<div className="c-player-photo u-width-4bl" >
<div className="c-player-photo__level u-bgcolor-fighter"></div>

</div>
</div>

                </a>

                <dt>
                    <h2 className="u-color-paste"><a href="/single-player.php">Teddy Brompsky</a></h2>
                </dt>

                <dd>
                    <p className="u-size-h1 u-color-white">3</p>
                </dd>

            </li>

            <li className="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold05 u-vspace-1bl">

                <a href="/single-player.php">
                    <PlayerPhoto />
                </a>

                <dt>
                    <h2 className="u-color-paste"><a href="/single-player.php">Angelica Thompson</a></h2>
                </dt>

                <dd>
                    <p className="u-size-h1 u-color-white">2</p>
                </dd>

            </li>
        </dl>

        <dl className="u-flex u-jc-between u-ph-1bl">

            <li className="u-flex u-ai-center u-hspace-05bl">
                <dt>Submitted by </dt>
                <dd>
<div className="u-pos-relative" aria-hidden="true">

<div className="c-player-photo u-width-2bl" >
<div className="c-player-photo__level u-bgcolor-knight"></div>

</div>
</div>

<span className="o-dictate">Christy Quinn</span></dd>
            </li>

            <li>
                <dt className="o-dictate">Submitted on </dt>
                <dd>Monday 11th January 2017</dd>
            </li>

        </dl>

    </div>

    <footer className="u-ph-1bl">
        <a href="#open-dispute" className="c-button c-button--warning u-mt-1bl">Dispute match</a>
    </footer>

</section>

<hr className="c-hr" />

<section>

    <section id="open-dispute" className="u-vspace-2bl">

        <div className="o-container u-ph-1bl">

            <header className="u-flex u-jc-between u-ai-center">
                <h1 id="start-dispute" className="u-size-h1 u-color-white">Dispute</h1>

                <a href="#" className="u-color-hotmelon">Cancel</a>
            </header>

        </div>

        <nav className="u-bgcolor-fold u-pt-2bl">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li className="u-grow-1"><a href="#" className="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-borrad-3300 u-size-h4 u-color-white u-bgcolor-floor">Wrong scores</a></li>
                <li className="u-grow-1"><a href="#" className="u-block u-width-100pc u-align-left u-pv-1bl u-ph-1bl u-color-playdough u-color-white@hover u-bgcolor-floor05 u-borrad-3300 u-size-h4">Didn't happen</a></li>
            </ul>
        </nav>

        <div className="o-container u-vspace-3bl">

            <div className="u-vspace-2bl">

                <p className="u-ph-1bl">What <em>were</em> the scores, Christy?</p>

                <div className="u-borrad-first-2200 u-borrad-last-0022">
                    <li className="u-bgcolor-fold">
<div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste">

<div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center u-hspace-1bl">

<dt className="u-size-h4 u-weight-bold u-ws-no">
    <span className="o-dictate">Teddy Austin </span> <input className="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" /> &ndash; <span className="o-dictate">Angelica Hamlet </span><input className="u-width-205bl u-line-2 u-align-center" type="number" placeholder="0" min="0" max="14" />
</dt>

</div>

<div className="u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left u-hspace-1bl">


<div className="u-pos-relative" aria-hidden="true">


<div className="c-player-photo u-width-3bl" >
<div className="c-player-photo__level u-bgcolor-scout"></div>

</div>
</div>


<span className="o-ellipsis" aria-hidden="true">Teddy</span>


</div>


<div className="u-grow-1 u-basis-0 u-order-3 u-flex u-ai-center u-jc-end u-align-right u-hspace-1bl">

<span className="o-ellipsis" aria-hidden="true">Angelica</span>


<div className="u-pos-relative" aria-hidden="true">


<div className="c-player-photo u-width-3bl" >
<div className="c-player-photo__level u-bgcolor-legendary"></div>

</div>
</div>


</div>

</div>
</li>
                </div>

            </div>

            <div className="u-ph-1bl u-vspace-2bl">

                <div className="u-pos-relative u-vspace-2bl">
                    <p className="u-size-h4"><label>Comments:</label></p>
                    <textarea placeholder="Tell us what went down" className="u-width-100pc u-height-5rem"></textarea>
                </div>

                <div className="u-flex u-ai-center u-hspace-05bl u-size-14px">
                    
<div className="u-pos-relative" aria-hidden="true">


<div className="c-player-photo u-width-2bl" >
<div className="c-player-photo__level u-bgcolor-scout"></div>

</div>
</div>

                    <span className="o-dictate">Christy Quinn</span> <span>will have 24 hours to respond to your dispute.</span>
                </div>

                <a href="#start-dispute" className="c-button c-button--default">Start dispute</a>

            </div>

        </div>

    </section>

</section>

<footer>

<hr className="c-hr" />

<div className="o-container u-flex u-jc-between u-ai-center u-ph-1bl u-pv-2bl">

<select className="u-color-playdough">
<option selected="">Britannia Squash</option>
<optgroup label="Switch club:">
    <option>Shoreditch Park Squash</option>
    <option>Coolhurst London Premier League Squash</option>
</optgroup>
</select>

<a href="/invite-player.php" className="u-color-playdough">Invite player</a>

</div>

</footer>

</main>

    </Template>
);

export default ResultScreen;
