import React from 'react';

// Components
import Input from '../components/Input';

const CreateClubScreen = () => (
    <div>
        <h1>Create a club</h1>
        <p>Let the games begin, Christy!</p>

        <form>
            <Input
                id="name"
                label="Club name"
                name="name"
            />

            <Input
                id="sport"
                label="Sport"
                name="sport"
            />

            <button type="submit">
                Create my club
            </button>
        </form>

        <div>
            <a href="/">Back to dashboard</a>
        </div>
    </div>
);

export default CreateClubScreen;
