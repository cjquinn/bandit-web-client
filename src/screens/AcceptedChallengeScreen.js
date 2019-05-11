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
        <header className="o-container u-ph-1bl">
            <h1 className="u-size-h1 u-color-white">Upcoming Match</h1>
            <Link
                to="/challenges"
                className="u-mt-2bl c-button c-button--default"
            >
                Contact Alaric
            </Link>
        </header>

        <hr className="c-hr" />

        <div className="o-container u-ph-1bl u-vspace-3bl">

            <dl className="u-vspace-2bl">
                <div className="u-vspace-03r">
                    <dt className="u-size-h3 u-color-white">Date:</dt>
                    <dd className="">Tuesday 18:30 - 26th February</dd>
                </div>
                <div className="u-vspace-03r">
                    <dt className="u-size-h3 u-color-white">Location:</dt>
                    <dd className="">Britannia Squash Centre</dd>
                </div>
            </dl>

            <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold">

                <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center">

                    {/* <PlayerPhoto 
                            player={match.player_a} 
                            width="3bl"
                        /> */}<div className="u-pos-relative" aria-hidden="true"><div className="c-player-photo c-player-photo--no-photo u-width-3bl"><div className="c-player-photo__level"><div className="c-player-photo__stripe u-bgcolor-fighter"></div></div></div></div>

                    <dt className="u-ml-1bl u-size-h4 u-weight-bold u-ws-no">
                        <span className="u-inline-block u-width-4ch u-align-center">vs</span>
                        <span className="o-dictate u-capitalize">Player B.</span>
                    </dt>

                    <div className="u-ml-1bl">
                        {/* <PlayerPhoto 
                            player={match.player_a} 
                            width="3bl"
                        /> */}<div className="u-pos-relative" aria-hidden="true"><div className="c-player-photo c-player-photo--no-photo u-width-3bl"><div className="c-player-photo__level"><div className="c-player-photo__stripe u-bgcolor-fighter"></div></div></div></div>
                    </div>
                </div>

                <div className="u-grow-1 u-basis-0 u-order-1 u-align-left o-ellipsis u-capitalize u-vspace-03r">
                    <dt className="u-color-paste u-capitalize">Helena S.</dt>
                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span className="u-flex u-ai-center u-hspace-4px">
                            <Svg
                                sprite={rating}
                                className="u-width-1bl u-height-auto"
                            />

                            <span className="u-color-paste">
                                1261 <span className="o-dictate">rating</span>
                            </span>
                        
                        </span>
                    </dd>
                </div>

                <div className="u-grow-1 u-basis-0 u-order-3 u-flex u-ai-end u-fd-col u-jc-end u-align-right o-ellipsis u-capitalize u-vspace-03r">

                    <dt className="u-color-paste u-capitalize">Jamie B.</dt>
                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span className="u-flex u-ai-center u-hspace-4px">
                            <Svg
                                sprite={rating}
                                className="u-width-1bl u-height-auto"
                            />

                            <span className="u-color-paste">
                                1339 <span className="o-dictate">rating</span>
                            </span>
                        
                        </span>
                    </dd>

                </div>


                </div>

            {/* Just show this _after_ the time?? */}
            <Link
                to="/challenges"
                className="c-button c-button--default"
            >
                Submit match score
            </Link>

            
            {/* Just show this _after_ the time?? */}
            <button
                className="c-button c-button--warning u-mt-3bl"
            >
                Cancel challenge
            </button>

            <button
                className="c-button c-button--warning u-mt-3bl"
            >
                Decline challenge
            </button>

        </div>

        <FooterContainer/>
    </Template>
);

export default CreateChallengeScreen;
