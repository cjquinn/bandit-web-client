import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import Template from '../components/shared/Template';

// Containers
import AddMatchFormContainer from '../containers/forms/AddMatchFormContainer';

const AddMatchScreen = ({ user }) => (
    <Template>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            {/* <Link
                to="/matches"
                className="c-go"
            >
                Back to matches
            </Link> */}

            <header className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Add Match</h1>

                <h2 className="u-size-h4">Get those games in, {user.first_name}!</h2>
            </header>
        </div>

        <hr className="c-hr" />

        <AddMatchFormContainer />

        <Footer />
    </Template>
);

AddMatchScreen.propTypes = {
    user: PropTypes.object.isRequired
};

export default AddMatchScreen;
