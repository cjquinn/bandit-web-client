import React from 'react';

// Components
import PlayerPhoto from '../components/PlayerPhoto';
import Svg from './Svg';

// Sprite
import rating from '../assets/svg/sprite/rating.svg';

const AllTimeLeaderboardPlayer = () => (

    <li className="u-pos-relative u-bgcolor-fold">

        {/*

            If is you

            <div className="o-absolute-fill u-borrad-inherit u-shadow-you u-pointer-none"></div>

        */}

        <a href="/player" className="u-flex u-ai-center u-pv-1bl u-ph-1bl">

            <div className="u-mr-1bl">
                <PlayerPhoto 
                    width="3bl"
                />
            </div>

            <dl className="u-flex u-jc-between u-ai-center u-width-100pc">
                <div className="u-grow-1 u-vspace-03r">
                    <dt className="u-color-paste">Rebekah Reeves</dt>
                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                        <span className="u-flex u-ai-center u-hspace-4px">
                            <Svg
                                sprite={rating}
                                className="u-width-1bl u-height-auto"
                            />
                            <span className="u-color-paste">1955 <span className="o-dictate">rating</span></span>
                        </span>
                        <span className="u-uppercase u-color-god">god</span>
                    </dd>
                </div>
                <dd className="u-color-paste u-size-h4 u-weight-bold u-ws-no">#2</dd>
            </dl>
        </a>
    </li>

);

export default AllTimeLeaderboardPlayer;
