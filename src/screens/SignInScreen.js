import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';

const SignInScreen = () => (
    <div>
        <h1>Bandit</h1>
        <p>Game, match, bandit</p>

        <form>
            <Input
                id="email"
                label="Email"
                name="email"
                type="email"
            />

            <Input
                id="password"
                label="Password"
                name="password"
                type="password"
            />

            <button type="submit">
                Sign in
            </button>
        </form>

        <div>
            <Link to="/create-club">Create a club</Link>
            <Link to="/request-password-reset">Reset password</Link>
        </div>
    </div>
);

export default SignInScreen;
