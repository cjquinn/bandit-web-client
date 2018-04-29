import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

const CreateClubAuthenticatedScreen = () => (
    <Template>
        <main className="o-main">

            <header className="o-container u-ph-1bl u-vspace-06r">

                <h1 className="u-size-h1 u-color-white">Create a Club</h1>
                <h2 className="u-size-h4">Let the games begin, Christy!</h2>

            </header>

            <hr className="c-hr" />

            <section className="o-container u-vspace-3bl">

                <div className="u-ph-1bl u-vspace-3bl">

                    <fieldset className="u-pos-relative">
                        <input type="text" />
                        <label>Club name:</label>
                    </fieldset>

                    <fieldset className="u-pos-relative">
                        <select>
                            <option>Squash</option>
                        </select>
                        <label>Sport:</label>
                    </fieldset>

                </div>

                <a href="/" className="c-button c-button--default">Next</a>

            </section>

            <Footer/>

        </main>
    </Template>
);

export default CreateClubAuthenticatedScreen;
