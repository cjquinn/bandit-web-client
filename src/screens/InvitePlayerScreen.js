import React from 'react';

// Components
import Input from '../components/Input';

const InvitePlayerScreen = () => (
    <div>
        <h1>Invite player</h1>
        <p>Got a competitive buddy to bring in?</p>

        <form>
            <Input
                id="email"
                label="Email"
                name="email"
                type="email"
            />

            <button type="submit">
                Send invite
            </button>
        </form>
    </div>
);

export default InvitePlayerScreen;
