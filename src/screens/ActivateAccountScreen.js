import React from 'react';

// Components
import Input from '../components/Input';

const ActivateAccountScreen = () => (
    <div>
        <h1>Activate account</h1>
        <p>Join the ranks at Shoreditch Park Squash</p>

        <form>
            <Input
                id="name"
                label="Name"
                name="name"
            />

            <Input
                id="password"
                label="Password"
                name="password"
                type="password"
            />

            <button type="submit">
                Activate my account
            </button>
        </form>

        <div>
            <a href="/sign-in">Sign in</a>
            <a href="/create-club">Create a club</a>
        </div>
    </div>
);

export default ActivateAccountScreen;
