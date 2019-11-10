import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import PlayerPhoto from '../shared/PlayerPhoto';
import PlayerSelectField from '../fields/PlayerSelectField';
import Svg from '../shared/Svg';

// Sprites
import arrow_down from '../../assets/svg/sprite/arrow_down.svg';
import rating from '../../assets/svg/sprite/rating.svg';

const AddMatchForm = ({ players, user, ...props }) => (
    <div>

        <nav className="u-bgcolor-fold u-pt-2bl u-borrad-3300">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li className="u-grow-1 u-basis-0">
                    <a className="c-tab c-tab--main c-tab--active" aria-current="page" href="/leaderboard/all-time">New Match</a>
                </li>
                <li className="u-grow-1 u-basis-0">
                    <a className="c-tab c-tab--main" href="/leaderboard/weekly">Challenge <span className="c-count">3</span></a>
                </li>
            </ul>
        </nav>

        <nav className="u-bgcolor-fold u-pt-2bl u-borrad-3300">
            <ul className="u-flex u-ph-1bl u-hspace-1bl">
                <li className="u-grow-1 u-basis-0">
                    <a className="c-tab c-tab--main c-tab--active" aria-current="page" href="/leaderboard/all-time">New Match</a>
                </li>
                <li className="u-grow-1 u-basis-0">
                    <a className="c-tab c-tab--main c-tab--disabled" href="/leaderboard/weekly">Challenge</a>
                </li>
            </ul>
        </nav>

        <div className="o-container u-pv-3bl u-vspace-2bl">



            {/* New Match - Step 1 Select Opponent */}
            <fieldset className="u-pos-relative">

                <div className="c-select-field">

                    <div className="c-select-field__select">

                        <div className="c-select-field__icon">
                            <Svg
                                sprite={arrow_down}
                                className="c-select-field__svg"
                            />
                        </div>

                        <select
                            className="c-select-field__input u-capitalize"
                        >
                            <option>
                                Select player
                            </option>

                            <option>
                                Adrian Barnes
                            </option>

                            <option>
                                Barnaby Baby
                            </option>
                        </select>
                    </div>

                    <label className="c-select-field__label u-ph-1bl">Opponent:</label>

                </div>

            </fieldset>
            {/* /end/ New Match - Step 1 Select Opponent */}

            {/* New Match - Step 2 Selected Opponent */}
            <fieldset className="u-pos-relative">

                <div className="c-select-field">

                    <div className="c-select-field__select">

                        <div className="c-select-field__icon">
                            <Svg
                                sprite={arrow_down}
                                className="c-select-field__svg"
                            />
                        </div>

                        <select
                            className="c-select-field__input u-capitalize"
                        >

                            <option>
                                Adrian Barnes
                            </option>

                            <option>
                                Barnaby Baby
                            </option>
                        </select>
                    </div>

                    <label className="c-select-field__label u-ph-1bl">Opponent:</label>

                </div>

            </fieldset>

            <div className="u-vspace-1bl">
                <h3 className="u-size-h4 u-weight-bold u-color-white u-ph-1bl">Score:</h3>

                <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220 ">
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
                            <div>
                                <div className="u-pos-relative" aria-hidden="true">
                                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                                        <div className="c-player-photo__level">
                                            <div className="c-player-photo__stripe u-bgcolor-fighter"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                                <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                                <div className="u-flex u-hspace-4px u-ai-center">
                                    
                                    <div className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                                        </span>
                                    </div>
                                </div>
                            </dt>

                            <dd className="u-mt-2bl">
                                <input type="number" placeholder="0" className="c-score-input" />
                            </dd>
                        </div>
                    </li>
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
                            <div>
                                <div className="u-pos-relative" aria-hidden="true">
                                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                                        <div className="c-player-photo__level">
                                            <div className="c-player-photo__stripe u-bgcolor-fighter"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                                <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                                <div className="u-flex u-hspace-4px u-ai-center">
                                    
                                    <div className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                                        </span>
                                    </div>
                                </div>
                            </dt>

                            <dd className="u-mt-2bl">
                                <input type="number" placeholder="0" className="c-score-input" />
                            </dd>
                        </div>
                    </li>
                </dl>

            </div>

            <button
                className="c-button"
                disabled
            >
                Add match
            </button>
            {/* /end/ New Match - Step 2 Selected Opponent */}

            {/* New Match - Step 3 Entered Score */}
            <fieldset className="u-pos-relative">

                <div className="c-select-field">

                    <div className="c-select-field__select">

                        <div className="c-select-field__icon">
                            <Svg
                                sprite={arrow_down}
                                className="c-select-field__svg"
                            />
                        </div>

                        <select
                            className="c-select-field__input u-capitalize"
                        >

                            <option>
                                Adrian Barnes
                            </option>

                            <option>
                                Barnaby Baby
                            </option>
                        </select>
                    </div>

                    <label className="c-select-field__label u-ph-1bl">Opponent:</label>

                </div>

            </fieldset>

            <div className="u-vspace-1bl">
                <h3 className="u-size-h4 u-weight-bold u-color-white u-ph-1bl">Score:</h3>

                <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220 ">
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
                            <div>
                                <div className="u-pos-relative" aria-hidden="true">
                                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                                        <div className="c-player-photo__level">
                                            <div className="c-player-photo__stripe u-bgcolor-fighter"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                                <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                                <div className="u-flex u-hspace-4px u-ai-center">
                                    
                                    <div className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                                        </span>
                                    </div>
                                </div>
                            </dt>

                            <dd className="u-mt-2bl">
                                <input type="number" value="4" placeholder="0" className="c-score-input" />
                            </dd>
                        </div>
                    </li>
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
                            <div>
                                <div className="u-pos-relative" aria-hidden="true">
                                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                                        <div className="c-player-photo__level">
                                            <div className="c-player-photo__stripe u-bgcolor-fighter"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                                <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                                <div className="u-flex u-hspace-4px u-ai-center">
                                    
                                    <div className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                                        </span>
                                    </div>
                                </div>
                            </dt>

                            <dd className="u-mt-2bl">
                                <input type="number" value="1" placeholder="0" className="c-score-input" />
                            </dd>
                        </div>
                    </li>
                </dl>

            </div>

            <button
                className="c-button c-button--default"
            >
                Add match
            </button>
            {/* /end/ New Match - Step 3 Entered Score */}


            {/* Challenge - Step 1 Select Challenge */}
            <fieldset className="u-pos-relative">

                <div className="c-select-field">

                    <div className="c-select-field__select">

                        <div className="c-select-field__icon">
                            <Svg
                                sprite={arrow_down}
                                className="c-select-field__svg"
                            />
                        </div>

                        <select
                            className="c-select-field__input u-capitalize"
                        >
                            <option>
                                Select challenge
                            </option>

                            <option>
                                Adrian Barnes - Tuesday 16th July 2019
                            </option>

                            <option>
                                Barnaby Baby - Thursday 18th July 2019
                            </option>
                        </select>
                    </div>

                    <label className="c-select-field__label u-ph-1bl">Challenge:</label>

                </div>

            </fieldset>
            {/* /end/ Challenge - Step 1 Select Challenge */}

            {/* New Match - Step 2 Selected Challenge */}
            <fieldset className="u-pos-relative">

                <div className="c-select-field">

                    <div className="c-select-field__select">

                        <div className="c-select-field__icon">
                            <Svg
                                sprite={arrow_down}
                                className="c-select-field__svg"
                            />
                        </div>

                        <select
                            className="c-select-field__input u-capitalize"
                        >
                            
                            <option>
                                Adrian Barnes - Tuesday 16th July 2019
                            </option>

                            <option>
                                Barnaby Baby - Thursday 18th July 2019
                            </option>
                        </select>
                    </div>

                    <label className="c-select-field__label u-ph-1bl">Challenge:</label>

                </div>

            </fieldset>

            <div className="u-vspace-1bl">
                <h3 className="u-size-h4 u-weight-bold u-color-white u-ph-1bl">Score:</h3>

                <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220 ">
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
                            <div>
                                <div className="u-pos-relative" aria-hidden="true">
                                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                                        <div className="c-player-photo__level">
                                            <div className="c-player-photo__stripe u-bgcolor-fighter"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                                <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                                <div className="u-flex u-hspace-4px u-ai-center">
                                    
                                    <div className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                                        </span>
                                    </div>
                                </div>
                            </dt>

                            <dd className="u-mt-2bl">
                                <input type="number" placeholder="0" className="c-score-input" />
                            </dd>
                        </div>
                    </li>
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
                            <div>
                                <div className="u-pos-relative" aria-hidden="true">
                                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                                        <div className="c-player-photo__level">
                                            <div className="c-player-photo__stripe u-bgcolor-fighter"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                                <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                                <div className="u-flex u-hspace-4px u-ai-center">
                                    
                                    <div className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                                        </span>
                                    </div>
                                </div>
                            </dt>

                            <dd className="u-mt-2bl">
                                <input type="number" placeholder="0" className="c-score-input" />
                            </dd>
                        </div>
                    </li>
                </dl>

            </div>

            <button
                className="c-button"
                disabled
            >
                Add match
            </button>
            {/* /end/ New Match - Step 2 Selected Challenge */}

            {/* New Match - Step 3 Entered Score */}
            <fieldset className="u-pos-relative">

                <div className="c-select-field">

                    <div className="c-select-field__select">

                        <div className="c-select-field__icon">
                            <Svg
                                sprite={arrow_down}
                                className="c-select-field__svg"
                            />
                        </div>

                        <select
                            className="c-select-field__input u-capitalize"
                        >
                            
                            <option>
                                Adrian Barnes - Tuesday 16th July 2019
                            </option>

                            <option>
                                Barnaby Baby - Thursday 18th July 2019
                            </option>
                        </select>
                    </div>

                    <label className="c-select-field__label u-ph-1bl">Challenge:</label>

                </div>

            </fieldset>

            <div className="u-vspace-1bl">
                <h3 className="u-size-h4 u-weight-bold u-color-white u-ph-1bl">Score:</h3>

                <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220 ">
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
                            <div>
                                <div className="u-pos-relative" aria-hidden="true">
                                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                                        <div className="c-player-photo__level">
                                            <div className="c-player-photo__stripe u-bgcolor-fighter"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                                <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                                <div className="u-flex u-hspace-4px u-ai-center">
                                    
                                    <div className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                                        </span>
                                    </div>
                                </div>
                            </dt>

                            <dd className="u-mt-2bl">
                                <input type="number" value="4" placeholder="0" className="c-score-input" />
                            </dd>
                        </div>
                    </li>
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                        <div className="u-flex u-fd-col u-ai-center u-pv-3bl">
                            <div>
                                <div className="u-pos-relative" aria-hidden="true">
                                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                                        <div className="c-player-photo__level">
                                            <div className="c-player-photo__stripe u-bgcolor-fighter"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <dt className="u-flex u-fd-col u-ai-center u-mt-1bl">
                                <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                                <div className="u-flex u-hspace-4px u-ai-center">
                                    
                                    <div className="u-flex u-ai-center u-hspace-4px">
                                        <Svg
                                            sprite={rating}
                                            className="u-width-1bl u-height-auto"
                                        />
                                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                                        </span>
                                    </div>
                                </div>
                            </dt>

                            <dd className="u-mt-2bl">
                                <input type="number" value="1" placeholder="0" className="c-score-input" />
                            </dd>
                        </div>
                    </li>
                </dl>

            </div>

            <button
                className="c-button c-button--default"
            >
                Add match
            </button>
            {/* /end/ New Match - Step 3 Entered Score */}




        </div>

    {/* <Field
        name="player_b_id"
        component={PlayerSelectField}
        players={players}
    /> */}
    
    
    {/* <Form
        buttonText="Add match"
        {...props}
    >
        <div className="u-vspace-3bl">
            <div className="u-vspace-2bl">
                <div className="c-add-match u-flex u-ai-center u-pv-1bl u-ph-1bl u-color-paste u-bgcolor-fold">
                    <div className="c-add-match__player c-add-match__player--you u-grow-1 u-basis-0 u-flex u-ai-center u-jc-center u-order-2 u-align-center">
                        <div className="u-size-h4 u-weight-bold u-ws-no u-hspace-05bl">
                            <Field
                                className="c-score-input u-width-205bl u-line-2 u-align-center"
                                name="player_a_score"
                                component="input"
                                type="number"
                                placeholder="0"
                                min="0"
                            />
                            <span>&ndash;</span> 
                            <Field
                                className="c-score-input u-width-205bl u-line-2 u-align-center"
                                name="player_b_score"
                                component="input"
                                type="number"
                                placeholder="0"
                                min="0"
                            />
                        </div>
                    </div>

                    <div className="u-ov-hidden u-grow-1 u-basis-0 u-order-1 u-flex u-ai-center u-align-left">

                        <div className="c-add-match__photo c-add-match__photo--you u-mr-1bl">
                            <PlayerPhoto 
                                player={user.player} 
                                width="2bl"
                            />
                        </div>

                        <span className="o-ellipsis" aria-hidden="true">{user.display_name}</span>
                    </div>

                    <Field
                        name="player_b_id"
                        component={PlayerSelectField}
                        players={players}
                    />
                </div>

                <hr className="c-hr" />

                <div className="u-ph-1bl">
                    <details className="c-notification c-notification--info" role="alert">
                        <summary><span className="u-weight-bold">How is a match scored?</span></summary>

                        <p>Each game won by a player makes up their score.</p>

                        <ol className="u-pv-1bl u-line-105">
                            <li>You won <strong className="u-color-white">5 games</strong></li>
                            <li>You lost <strong className="u-color-white">3 games</strong></li>
                            <li>Match score is <strong className="u-color-white">5 &ndash; 3</strong></li>
                        </ol>
                    </details>
                </div>
            </div>
        </div>
    </Form> */}
    </div>
);

AddMatchForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    players: PropTypes.array.isRequired,
    submitting: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
};

export default AddMatchForm;
