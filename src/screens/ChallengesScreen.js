import React from 'react';

import { Link } from 'react-router-dom';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import Template from '../components/shared/Template';
import Svg from '../components/shared/Svg';

// Sprite
import rating from '../assets/svg/sprite/rating.svg';

const ChallengesScreen = () => (
    <Template>
        <header className="o-container u-ph-1bl">
            <div className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Challenges</h1>
                <h2 className="u-size-h4 u-line-error">Book in your next matches</h2>
            </div>

            <Link to="/challenges/create" className="c-button c-button--default u-mt-2bl">New challenge</Link>
        </header>

        {/* <hr className="c-hr" /> */}

        <nav className="u-bgcolor-fold u-pt-2bl u-borrad-3300"><ul className="u-flex u-ph-1bl u-hspace-1bl"><li className="u-grow-1"><a className="c-tab c-tab--main c-tab--active" aria-current="page" href="/leaderboard/all-time">Open</a></li><li className="u-grow-1"><a className="c-tab c-tab--main" href="/challenges/">Accepted</a></li></ul></nav>

        <div className="o-container u-vspace-3bl">

            <div>
                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h3 u-color-white">This Week</h1>
                </header>

                <ol className="u-mt-2bl u-vspace-1bl">

                <li>
                {/* Open Challenge */}
                <Link
                    to={`/challenges/open`}
                    className="u-block u-color-paste"
                >
                    <div className="u-flex u-jc-between u-ai-center u-pv-105bl u-ph-1bl u-bgcolor-fold u-borrad-3300">

                        <div className="">
                            <p className="u-size-14px u-color-white u-weight-bold">Tuesday 18:30</p>
                        </div>
                        
                        <div className="u-align-right">
                            <p className="u-color-white u-size-13px u-weight-bold">26th February</p>
                        </div>

                    </div>
                    {/* <div className="u-mr-2bl u-ml-1bl u-color-paste u-size-h4 u-weight-bold">vs</div> */}

                    <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold05">

                        <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center">

                            {/* <PlayerPhoto 
                                player={match.player_a} 
                                width="3bl"
                            /> */}<div className="u-pos-relative" aria-hidden="true"><div className="c-player-photo c-player-photo--unassigned u-width-3bl"></div></div>

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

                        <div className="u-grow-1 u-basis-0 u-order-1 u-align-left o-ellipsis u-capitalize">

                        <Link
                                to="/matches"
                                className="c-go"
                            >
                                Open
                            </Link>
                            
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
                    
                </Link>
                {/*  */} 
                </li>

                <li>
                {/* Open Challenge */}
                <Link
                    to={`/challenges/open`}
                    className="u-block u-color-paste"
                >
                    <div className="u-flex u-jc-between u-ai-center u-pv-105bl u-ph-1bl u-bgcolor-fold u-borrad-3300">

                        <div className="">
                            <p className="u-size-14px u-color-white u-weight-bold">Wednesday 21:00</p>
                        </div>
                        
                        <div className="u-align-right">
                            <p className="u-color-white u-size-13px u-weight-bold">27th February</p>
                            
                        </div>

                    </div>
                    {/* <div className="u-mr-2bl u-ml-1bl u-color-paste u-size-h4 u-weight-bold">vs</div> */}

                    <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold05">

                        <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center">

                            {/* <PlayerPhoto 
                                player={match.player_a} 
                                width="3bl"
                            /> */}<div className="u-pos-relative" aria-hidden="true"><div className="c-player-photo c-player-photo--unassigned u-width-3bl"></div></div>

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

                        <div className="u-grow-1 u-basis-0 u-order-1 u-align-left o-ellipsis u-capitalize">

                        <Link
                                to="/matches"
                                className="c-go"
                            >
                                Open
                            </Link>
                            
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
                    
                </Link>
                {/*  */} 
                </li>

                </ol>
            </div>

            <hr className="c-hr" />

            <div>
                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h3 u-color-white">Next Week</h1>
                </header>

                <ol className="u-mt-2bl u-vspace-1bl">

                <li>
                {/* Completely Open Challenge(!?) */}
                <Link
                    to={`/challenges/open`}
                    className="u-block u-color-paste"
                >
                    <div className="u-flex u-jc-between u-ai-center u-pv-105bl u-ph-1bl u-bgcolor-fold u-borrad-3300">

                        <div className="">
                            <p className="u-size-14px u-color-white u-weight-bold">Friday 07:40</p>
                        </div>
                        
                        <div className="u-align-right">
                            <p className="u-color-white u-size-13px u-weight-bold">30th February</p>
                            
                        </div>

                    </div>
                    {/* <div className="u-mr-2bl u-ml-1bl u-color-paste u-size-h4 u-weight-bold">vs</div> */}

                    <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold05">

                        <div className="u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center">

                            {/* <PlayerPhoto 
                                    player={match.player_a} 
                                    width="3bl"
                                /> */}<div className="u-pos-relative" aria-hidden="true"><div className="c-player-photo c-player-photo--unassigned u-width-3bl"></div></div>

                            <dt className="u-ml-1bl u-size-h4 u-weight-bold u-ws-no">
                                <span className="u-inline-block u-width-4ch u-align-center">vs</span>
                                <span className="o-dictate u-capitalize">Player B.</span>
                            </dt>

                            <div className="u-ml-1bl">
                                {/* <PlayerPhoto 
                                    player={match.player_a} 
                                    width="3bl"
                                /> */}<div className="u-pos-relative" aria-hidden="true"><div className="c-player-photo c-player-photo--unassigned u-width-3bl"></div></div>
                            </div>
                        </div>

                        <div className="u-grow-1 u-basis-0 u-order-1 u-align-left o-ellipsis u-capitalize u-vspace-03r">

                            <Link
                                to="/matches"
                                className="c-go"
                            >
                                Open
                            </Link>

                        </div>

                        <div className="u-grow-1 u-basis-0 u-order-3 u-flex u-ai-end u-fd-col u-jc-end u-align-right o-ellipsis u-capitalize u-vspace-03r">

                            <Link
                                to="/matches"
                                className="c-go"
                            >
                                Open
                            </Link>

                        </div>

                    </div>
                    
                </Link>
                {/*  */}
                </li>

                <li>
                {/* Accepted Challenge */}
                <Link
                    to={`/challenges/accepted`}
                    className="u-block u-color-paste"
                >
                    <div className="u-flex u-jc-between u-ai-center u-pv-105bl u-ph-1bl u-bgcolor-fold u-borrad-3300">

                        <div className="">
                            <p className="u-size-14px u-color-white u-weight-bold">Sunday 12:00</p>
                        </div>
                        
                        <div className="u-align-right">
                            <p className="u-color-white u-size-13px u-weight-bold">31st February</p>
                            
                        </div>

                    </div>
                    {/* <div className="u-mr-2bl u-ml-1bl u-color-paste u-size-h4 u-weight-bold">vs</div> */}

                    <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl u-bgcolor-fold05">

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
                    
                </Link>
                {/*  */} 
                </li>

                </ol>
            </div>

            <hr className="c-hr" />

            <div>
                <header className="u-flex u-jc-between u-ai-center u-ph-1bl">
                    <h1 className="u-size-h3 u-color-white">Further</h1>
                </header>
            </div>

        </div>

        <FooterContainer/>
    </Template>
);

export default ChallengesScreen;
