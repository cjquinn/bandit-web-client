import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';

const RequestPasswordResetScreen = () => (
    <div>
        <h1>Request new password</h1>
        <p>Well they&rsquo;re not supposed to be easy.</p>

        <form>
            <Input
                id="email"
                label="Email"
                name="email"
                type="email"
            />

            <button type="submit">
                Send me a secure link
            </button>
        </form>

        <div>
            <Link to="/sign-in">Wait, I remember!</Link>
        </div>
    </div>
);

export default RequestPasswordResetScreen;
