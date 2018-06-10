import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import Template from '../components/shared/Template';

// Containers
import AddMatchFormContainer from '../containers/forms/AddMatchFormContainer';

const AddMatchScreen = () => (
    <Template>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            <Link
                to="/matches"
                className="c-go"
            >
                Back
            </Link>

            <header className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Add Match</h1>

                <h2 className="u-size-h4">Get those games in, Stephen!</h2>
            </header>
        </div>

        <hr className="c-hr" />

        <AddMatchFormContainer />

        <Footer />
    </Template>
);

export default AddMatchScreen;
