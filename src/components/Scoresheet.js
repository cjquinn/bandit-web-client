import PropTypes from 'prop-types';
import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';

const Scoresheet = () => (

    <div className="u-vspace-2bl">

        <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220">
            <li className="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold u-vspace-1bl">

                <a href="/player">
                    {/* 4bl */}
                    <PlayerPhoto />
                </a>

                <dt>
                    <h2 className="u-color-paste"><a href="/player">Teddy Brompsky</a></h2>
                </dt>

                <dd>
                    <p className="u-size-h1 u-color-white">3</p>
                </dd>

                <dd className="u-color-loss">-70 <abbr title="rating points">pts.</abbr></dd>

            </li>

            <li className="u-flex u-fd-col u-grow-1 u-basis-0 u-ai-center u-pv-2bl u-bgcolor-fold05 u-vspace-1bl">

                <a href="/player">
                    {/* 4bl */}
                    <PlayerPhoto />
                </a>

                <dt>
                    <h2 className="u-color-paste"><a href="/player">Angelica Thompson</a></h2>
                </dt>

                <dd>
                    <p className="u-size-h1 u-color-white">2</p>
                </dd>

                <dd className="u-color-win">+165 <abbr title="rating points">pts.</abbr></dd>

            </li>
        </dl>

        <dl className="u-flex u-ai-center u-jc-between u-ph-1bl">

            <li className="u-flex u-ai-center u-hspace-05bl">
                <dt>Submitted by </dt>
                <dd><PlayerPhoto /> <span className="o-dictate">Christy Quinn</span></dd>
            </li>

            <li>
                <dt className="o-dictate">Submitted on </dt>
                <dd>Monday 11th January 2017</dd>
            </li>

        </dl>

    </div>

);

export default Scoresheet;