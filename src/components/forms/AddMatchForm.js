import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

// Components
import Form from './Form';
import PlayerPhoto from '../shared/PlayerPhoto';
import PlayerSelectField from '../fields/PlayerSelectField';

const AddMatchForm = ({ players, user, ...props }) => (
    <div>

        <div className="o-container u-ph-1bl">

                <fieldset className="u-pos-relative">

                <div className="c-select">
                    <select
                        className="c-select__select u-color-playdough u-capitalize"
                    >
                        <option value={null}>
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

                <label>Who did you play?</label>

            </fieldset>

            <div>
                <h3>Match Score:</h3>

                <dl className="u-flex u-hspace-1px u-borrad-first-2002 u-borrad-last-0220 null">
                    <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                    <div className="u-flex u-fd-col u-ai-center u-pv-3bl u-vspace-1bl">
                    <div>
                    <div className="u-pos-relative" aria-hidden="true">
                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                    <div className="c-player-photo__level">
                    <div className="c-player-photo__stripe u-bgcolor-gladiator">
                    </div>
                </div>
                </div>
                </div>
                </div>
                <dt>
                    <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                    <div className="u-flex u-hspace-4px u-ai-center u-pv-2bl">
                        <span className="c-levels u-flex u-ai-center"><span className="c-level u-bgcolor-fighter">Fighter</span></span>
                        <div className="u-flex u-ai-center u-hspace-4px">
                            {/* <svg className="c-svg c-svg--rating u-width-1bl u-height-auto" viewBox="0 0 11 13">
                            <use xlink:href="#rating">
                            </use>
                        </svg> */}
                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                        </span>
                        </div>
                    </div>
                </dt>
                <dd>
                    <input type="number" placeholder="0" styleProp="font-size: 3rem;" />
                    {/* <p className="u-size-h1 u-color-white">3</p> */}
                </dd>
                </div>
                </li>
                <li className="u-grow-1 u-basis-0 u-pt-3bl u-bgcolor-fold">
                    <div className="u-flex u-fd-col u-ai-center u-pv-3bl u-vspace-1bl">
                    <div>
                    <div className="u-pos-relative" aria-hidden="true">
                    <div className="c-player-photo c-player-photo--no-photo u-width-4bl">
                    <div className="c-player-photo__level">
                    <div className="c-player-photo__stripe u-bgcolor-fighter">
                    </div>
                </div>
                </div>
                </div>
                </div>
                <dt>
                    <h2 className="u-weight-bold u-color-paste u-capitalize">Hassan Patel</h2>
                    <div className="u-flex u-hspace-4px u-ai-center u-pv-2bl">
                        <span className="c-levels u-flex u-ai-center"><span className="c-level u-bgcolor-fighter">Fighter</span></span>
                        <div className="u-flex u-ai-center u-hspace-4px">
                            {/* <svg className="c-svg c-svg--rating u-width-1bl u-height-auto" viewBox="0 0 11 13">
                            <use xlink:href="#rating">
                            </use>
                        </svg> */}
                        <span className="u-color-paste">1157 <span className="o-dictate">rating</span>
                        </span>
                        </div>
                    </div>
                </dt>
                <dd>
                    <input type="number" placeholder="0" styleProp="font-size: 3rem;" />
                </dd>
                </div>
                
                </li>
                </dl>

            </div>

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
