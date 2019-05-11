import React from 'react';

import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import PlayerItem from '../components/items/PlayerItem';
import Svg from '../components/shared/Svg';
import Template from '../components/shared/Template';

// Sprite
import rating from '../assets/svg/sprite/rating.svg';

// Containers
// import CreateChallengeFormContainer from '../containers/forms/CreateChallengeFormContainer';

const CreateChallengeScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl u-vspace-06r">
            <h1 className="u-size-h1 u-color-white">Open Challenge</h1>
            {/* <h2 className="u-size-h4 u-line-error">Your open challenge will be shared with your club-mates</h2> */}
        </header>

        <hr className="c-hr" />

        <div className="o-container u-ph-1bl u-vspace-3bl">

            <dl className="u-vspace-2bl">
                <div className="u-vspace-03r">
                    <dt className="u-size-h3 u-color-white">Date:</dt>
                    <dd className="">18:40 - Tuesday 26th February</dd>
                </div>
                <div className="u-vspace-03r">
                    <dt className="u-size-h3 u-color-white">Location:</dt>
                    <dd className="">Britannia Squash Centre</dd>
                </div>
                <div className="u-vspace-03r">
                    <dt className="o-dictate u-size-h3 u-color-white">Player:</dt>
                    <dd>
                    {/* <PlayerItem
                        player={player}
                        userId={userId}
                    /> */}<Link
                            to={`/players/70`}
                            className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold"
                        ><div className="u-mr-1bl"><div className="u-pos-relative" aria-hidden="true"><div className="c-player-photo c-player-photo--no-photo u-width-3bl"><div className="c-player-photo__level"><div className="c-player-photo__stripe u-bgcolor-gladiator"></div></div></div></div></div><dl className="u-flex u-jc-between u-ai-center u-width-100pc"><div className="u-grow-1 u-vspace-03r"><dt className="u-color-paste u-capitalize">Alaric Shorter</dt><dd className="u-flex u-ai-center u-hspace-8px u-size-13px"><span className="u-flex u-ai-center u-hspace-8px"><span className="u-flex u-ai-center u-hspace-4px">
                        <Svg
                            sprite={rating}
                            className="u-width-1bl u-height-auto"
                        />
                        <span className="u-color-paste">1303 <span className="o-dictate">rating</span></span></span><span><span className="o-dictate">from</span> 34 games</span></span></dd></div></dl>
                        </Link>
                    </dd>
                </div>
            </dl>

            <Link
                to="/challenges"
                className="c-button c-button--default"
            >
                Accept challenge
            </Link>

            <button
                className="c-button c-button--warning u-mt-3bl"
            >
                Cancel challenge
            </button>

        </div>

        <FooterContainer/>
    </Template>
);

export default CreateChallengeScreen;
