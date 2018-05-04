import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

const InvitePlayerScreen = () => (
    <Template>
        <main className="o-main">

            <div className="o-container u-ph-1bl u-vspace-2bl">

                <a href="/players" className="u-color-playdough">Back to Players</a>

                <header className="u-vspace-06r">

                    <h1 className="u-size-h1 u-color-white">Invite Player</h1>
                    <h2 className="u-size-h4">Friendships end where Bandit begins.</h2>

                </header>

            </div>

            <hr className="c-hr" />

            <section className="o-container u-vspace-3bl">

                <div className="u-ph-1bl u-vspace-3bl">

                    <fieldset className="u-pos-relative">
                        <input type="text" />
                        <label>Name:</label>
                    </fieldset>

                    <fieldset className="u-pos-relative">
                        <input type="email" />
                        <label>Email:</label>
                    </fieldset>

                </div>

                <a href="/" className="c-button c-button--default">Send invite</a>

            </section>

            <Footer/>

        </main>
    </Template>
);

export default InvitePlayerScreen;
