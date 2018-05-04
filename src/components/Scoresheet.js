import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';

const Scoresheet = () => (

    <div class="u-vspace-2bl">

        <dl class="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220">
            <li class="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold u-vspace-1bl">

                <a href="/player">
                    {/* 4bl */}
                    <PlayerPhoto />
                </a>

                <dt>
                    <h2 class="u-color-paste"><a href="/player">Teddy Brompsky</a></h2>
                </dt>

                <dd>
                    <p class="u-size-h1 u-color-white">3</p>
                </dd>

                <dd class="u-color-loss">-70 <abbr title="rating points">pts.</abbr></dd>

            </li>

            <li class="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold05 u-vspace-1bl">

                <a href="/player">
                    {/* 4bl */}
                    <PlayerPhoto />
                </a>

                <dt>
                    <h2 class="u-color-paste"><a href="/player">Angelica Thompson</a></h2>
                </dt>

                <dd>
                    <p class="u-size-h1 u-color-white">2</p>
                </dd>

                <dd class="u-color-win">+165 <abbr title="rating points">pts.</abbr></dd>

            </li>
        </dl>

        <dl class="u-flex u-ai-center u-jc-between u-ph-1bl">

            <li class="u-flex u-ai-center u-hspace-05bl">
                <dt>Submitted by </dt>
                <dd><PlayerPhoto /> <span class="o-dictate">Christy Quinn</span></dd>
            </li>

            <li>
                <dt class="o-dictate">Submitted on </dt>
                <dd>Monday 11th January 2017</dd>
            </li>

        </dl>

    </div>

);

export default Scoresheet;