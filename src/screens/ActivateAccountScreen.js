import React from 'react';

// Components
import Svg from '../components/Svg';
import Template from '../components/shared/Template';

// Sprites
import logo_knot from '../assets/svg/sprite/logo_knot.svg';

const ActivateAccountScreen = () => (
    <Template>

        <header className="o-container u-flex u-ai-center u-fd-col u-ph-1bl u-vspace-06r u-align-center">
            <h1 className="u-size-h1 u-color-white">
                <span className="u-pos-relative">
                    <Svg
                        className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
                        sprite={logo_knot}
                    />

                    Activate Account
                </span>
            </h1>
            <h2 className="u-size-h4">Ready to join the ranks?</h2>

        </header>

        <hr className="c-hr" />

        <section className="o-container u-vspace-3bl">

            <div className="u-ph-1bl u-vspace-3bl">

                <div>

                    <div className="u-flex u-hspace-2bl">

                        <fieldset className="u-pos-relative">
                            <input type="text" />
                            <label>First name:</label>
                        </fieldset>
                        
                        <fieldset className="u-pos-relative">
                            <input type="text" />
                            <label>Last name:</label>
                        </fieldset>

                    </div>

                </div>

                <fieldset className="u-pos-relative">
                    <input type="email" value="alreadyhere@gmail.com" />
                    <label>Email:</label>
                </fieldset>

                <div className="u-flex u-hspace-2bl">

                    <fieldset className="u-pos-relative">
                        <input type="password" />
                        <label>New password:</label>
                    </fieldset>

                    <fieldset className="u-pos-relative">
                        <input type="password" />
                        <label>Re-type:</label>
                    </fieldset>

                </div>

                <fieldset className="u-pos-relative">
                    <input type="text" disabled="" value="Shoreditch Park Squash League" />
                    <label>Club to join:</label>
                </fieldset>


            </div>

            <a href="/sign-up" className="c-button c-button--default">Activate my Account</a>

        </section>

    </Template>
);

export default ActivateAccountScreen;
