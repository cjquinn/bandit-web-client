import React from 'react';

// Components
import Template from '../components/Template';
import Svg from '../components/Svg';

// Sprite
import logo_knot from '../assets/svg/sprite/logo_knot.svg';

const ActivateAccountScreen = () => (
    <Template>
        <main class="o-main">

<header class="o-container u-flex u-ai-center u-fd-col u-ph-1bl u-vspace-06r u-align-center">

    <h1 class="u-size-h1 u-color-white">
        <span class="u-pos-relative">
            <Svg
                sprite={logo_knot}
                className="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto"
            />Activate Account
        </span>
    </h1>
    <h2 class="u-size-h4">Ready to join the ranks?</h2>

</header>

<hr class="c-hr" />

<section class="o-container u-vspace-3bl">

    <div class="u-ph-1bl u-vspace-3bl">

        <fieldset class="u-pos-relative">
            <input type="text" />
            <label>Name:</label>
        </fieldset>

        <fieldset class="u-pos-relative">
            <input type="email" value="alreadyhere@gmail.com" />
            <label>Email:</label>
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

        <fieldset class="u-pos-relative">
            <input type="text" disabled="" value="Shoreditch Park Squash League" />
            <label>Club to join:</label>
        </fieldset>


    </div>

    <a href="/register.php" class="c-button c-button--default">Activate my Account</a>

</section>

{/* <?php include('components/footer-create-club.php'); ?> */}

        </main>
    </Template>
);

export default ActivateAccountScreen;
