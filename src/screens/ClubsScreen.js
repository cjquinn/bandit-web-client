import React from 'react';

// Components
import Footer from '../components/Footer';
import Template from '../components/Template';

const ClubsScreen = () => (
    <Template>

        <header className="o-container u-ph-1bl u-vspace-06r">

            <h1 className="u-size-h1 u-color-white">Clubs</h1>
            <h2 className="u-size-h4">Jump into a different tribe.</h2>

        </header>

        <hr className="c-hr" />

        <section className="o-container u-vspace-3bl">

            <div className="u-ph-1bl u-vspace-1px">

                <li className="u-bgcolor-fold u-pos-relative">
                    <div className="o-absolute-fill u-borrad-inherit u-shadow-you u-pointer-none"></div>
                    <div className="u-flex u-ai-center u-pv-1bl u-ph-1bl">
                    <div className="u-grow-1 u-vspace-03r">
                    <dt className="u-color-paste u-weight-bold"><span className="o-dictate">Signed into </span>Britannia Squash</dt>
                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                    <span>48 players</span>
                    <span>11 days since you've played</span>
                    </dd>
                    </div>
                    </div>
                </li>
                <li className="u-bgcolor-fold u-pos-relative u-opac-05 u-opac-1@hover">
                    <a href="#" className="u-flex u-ai-center u-pv-1bl u-ph-1bl">
                    <div className="u-grow-1 u-vspace-03r">
                    <dt className="u-color-paste u-weight-bold">Atrium Ping Pong Park</dt>
                    <dd className="u-flex u-ai-center u-hspace-8px u-size-13px">
                    <span>48 players</span>
                    <span>11 days since you've played</span>
                    </dd>
                    </div>
                    </a>
                </li>

            </div>

            <a href="/create-club-authenticated" className="c-button c-button--default">Create a club</a>
        </section>

        <Footer/>

    </Template>
);

export default ClubsScreen;
