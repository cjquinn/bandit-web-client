import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

const UserSettingsScreen = () => (
    <Template>
        <main class="o-main">

            <header class="o-container u-ph-1bl u-vspace-06r">

                <h1 class="u-size-h1 u-color-white">Settings</h1>
                <h2 class="u-size-h4">Be your true self! Unless that person is a loser.</h2>

            </header>

            <hr class="c-hr" />

            <section class="o-container u-vspace-3bl">

                <div class="u-ph-1bl u-vspace-3bl">

                    <fieldset class="u-pos-relative">
                        <input type="text" value="Christy Quinn" placeholder="Christy Quinn" required />
                        <label>Name:</label>
                    </fieldset>

                    <fieldset class="u-pos-relative">
                        <input type="email" value="christyjquinn@gmail.com" placeholder="christyjquinn@gmail.com" required />
                        <label>Email:</label>
                    </fieldset>

                    <fieldset class="u-pos-relative">
                        <input type="file" value="" />
                        <label>Photo:</label>
                    </fieldset>

                    <div class="u-flex u-hspace-2bl">

                        <fieldset class="u-pos-relative">
                            <input type="password" />
                            <label>New password:</label>
                        </fieldset>

                        <fieldset class="u-pos-relative">
                            <input type="password" />
                            <label>Re-type:</label>
                        </fieldset>

                    </div>

                </div>

                <a href="/" class="c-button c-button--default">Update my settings</a>

            </section>

            <Footer />
            
        </main>
    </Template>
);

export default UserSettingsScreen;
