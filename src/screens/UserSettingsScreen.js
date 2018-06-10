import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/shared/Template';

const UserSettingsScreen = () => (
    <Template>

        <header className="o-container u-ph-1bl u-vspace-06r">

            <h1 className="u-size-h1 u-color-white">Settings</h1>
            <h2 className="u-size-h4">Be your true self! Unless that person is a loser.</h2>

        </header>

        <hr className="c-hr" />

        <section className="o-container u-vspace-3bl">

            <div className="u-ph-1bl u-vspace-3bl">

                {/* Form level validation error */}
                <div className="c-notification c-notification--error" role="alert">
                    <p className="u-weight-bold">Sorry champ!</p>
                    <p>We couldn&rsquo;t update your settings &#8212; please take another look at the errors below.</p>
                </div>

                <fieldset className="u-pos-relative">
                    <input type="text" value="Christy Quinn" required />
                    <label>Name:</label>
                </fieldset>

                <div>
                    <fieldset className="u-pos-relative">
                        <input type="email" value="christyjquinn@gmail.com" required />
                        <label>Email:</label>
                    </fieldset>

                    {/* Fieldset level validation error */}
                    <div className="c-notification c-notification--error" role="alert">
                        <p><span className="u-weight-bold">That email is already in use!</span> How does that even happen?</p>
                    </div>
                </div>

                <fieldset className="u-pos-relative">
                    <input type="file" value="" />
                    <label>Photo:</label>
                </fieldset>

                <div>

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

                    {/* Fieldset level validation error */}
                    <div className="c-notification c-notification--error" role="alert">
                        <p><span className="u-weight-bold">Your password was weak!</span> Please use at least 7 characters.</p>
                    </div>

                </div>

            </div>

            <a href="/" className="c-button c-button--default">Update my settings</a>

        </section>

        <Footer />
            
    </Template>
);

export default UserSettingsScreen;
