import React from 'react';

// Components
import Template from '../components/shared/Template';
import Svg from '../components/Svg';

// Sprite
import logo_knot from '../assets/svg/sprite/logo_knot.svg';

const CreateClubUnauthenticatedScreen = () => (
<Template>

<header className="o-container u-flex u-ai-center u-fd-col u-ph-1bl u-vspace-06r">

    <h1 className="u-size-h1 u-color-white"><span className="u-pos-relative">
    
    <Svg
        sprite={logo_knot}
        className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
    />
    
    Create a Club</span></h1>
    <h2 className="u-size-h4">Let the games begin!</h2>

</header>

<hr className="c-hr" />

<section className="o-container u-vspace-3bl">

    <div className="u-ph-1bl u-vspace-3bl">

        <fieldset className="u-pos-relative">
            <input type="text" />
            <label>Club name:</label>
        </fieldset>

        {/* <fieldset className="u-pos-relative">
                        <select>
                            <option>Squash</option>
                        </select>
                        <label>Sport:</label>
                    </fieldset> */}

    </div>

    <a href="/sign-up" className="c-button c-button--default">Next</a>

</section>

</Template>
);

export default CreateClubUnauthenticatedScreen;
