import React from 'react';

// Components
import Template from '../components/Template';

const CreateClubUnauthenticatedScreen = () => (
    <Template>
        <main class="o-main">

<header class="o-container u-flex u-ai-center u-fd-col u-ph-1bl u-vspace-06r">

    <h1 class="u-size-h1 u-color-white"><span class="u-pos-relative">
    
    {/* <svg class="c-player-photo__knot u-z-1 u-pos-absolute u-top-0 u-left-0 u-width-1bl u-height-auto" width="36" height="31" viewBox="0 0 36 31"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/dist/svg/sprite.svg#logo-knot"></use></svg> */}
    
    Create a Club</span></h1>
    <h2 class="u-size-h4">Let the games begin!</h2>

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

    <a href="/register.php" class="c-button c-button--default">Next</a>

</section>

{/* <?php include('components/footer-create-club.php'); ?> */}

</main>
    </Template>
);

export default CreateClubUnauthenticatedScreen;
