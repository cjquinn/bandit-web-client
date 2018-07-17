import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Template from '../components/shared/Template';

const MatchScreen = () => (
    <Template>
        <div className="o-container u-ph-1bl u-vspace-2bl">
            <Link
                to="/matches"
                className="c-go"
            >
                Back to matches
            </Link>
        </div>

        <hr className="c-hr" />
    </Template>
);

export default MatchScreen;
