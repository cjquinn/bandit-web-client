import React from 'react';

// Components
import Input from '../components/Input';

const CreateClubAuthenticatedScreen = () => (
    <div>
        <h1>Create a club</h1>
        <p>Let the games begin, Christy!</p>

        <form>
            <Input
                id="name"
                label="Name"
                name="name"
            />

            <button type="submit">
                Create my club
            </button>
        </form>
    </div>
);

export default CreateClubAuthenticatedScreen;
