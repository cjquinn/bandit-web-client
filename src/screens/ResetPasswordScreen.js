import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';

const ResetPasswordScreen = () => (
    <div>
        <h1>New password</h1>
        <p>Make it funny. And memorable.</p>

        <form>
            <Input
                id="password"
                label="Password"
                name="password"
                type="password"
            />

            <button type="submit">
                Save my password
            </button>
        </form>

        <div>
            <Link to="/sign-in">Cancel</Link>
        </div>
    </div>
);

export default ResetPasswordScreen;
