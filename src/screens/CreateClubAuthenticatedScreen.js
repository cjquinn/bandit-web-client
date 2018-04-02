import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

const CreateClubAuthenticatedScreen = () => (
    <Template>
        <main class="o-main">

            <header class="o-container u-ph-1bl u-vspace-06r">

                <h1 class="u-size-h1 u-color-white">Create a Club</h1>
                <h2 class="u-size-h4">Let the games begin, Christy!</h2>

            </header>

            <hr class="c-hr" />

            <section class="o-container u-vspace-3bl">

                <div class="u-ph-1bl u-vspace-3bl">

                    <fieldset class="u-pos-relative">
                        <input type="text" />
                        <label>Club name:</label>
                    </fieldset>

                    <fieldset class="u-pos-relative">
                        <select>
                            <option>Squash</option>
                        </select>
                        <label>Sport:</label>
                    </fieldset>

                </div>

                <a href="/" class="c-button c-button--default">Next</a>

            </section>

            <Footer/>

        </main>
    </Template>
);

export default CreateClubAuthenticatedScreen;
