import PropTypes from 'prop-types';
import React from 'react';

// Components
import FooterContainer from '../containers/shared/FooterContainer';
import Template from '../components/shared/Template';

// Containers
import AddMatchFormContainer from '../containers/forms/AddMatchFormContainer';

const AddMatchScreen = ({ user }) => (
    <Template>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            <header className="u-vspace-06r">
                <h1 className="u-size-h1 u-color-white">Add Match</h1>

                <h2 className="u-size-h4">Tell us how it went down, {user.first_name}!</h2>
            </header>
        </div>

        <AddMatchFormContainer />

        <FooterContainer />
    </Template>
);

AddMatchScreen.propTypes = {
    user: PropTypes.object.isRequired
};

export default AddMatchScreen;
