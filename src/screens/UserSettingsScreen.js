import React from 'react';

// Components
import Input from '../components/Input';

const UserSettingsScreen = () => (
    <div>
        <h1>Settings</h1>
        <p>Be your true self! Unless that person is a loser.</p>

        <form>
            <Input
                id="name"
                label="Name"
                name="name"
            />

            <Input
                id="email"
                label="Email"
                name="email"
                type="email"
            />

            <div>
                <Input
                    id="new-password"
                    label="New password"
                    name="new_password"
                    type="password"
                />

                <Input
                    id="confirm-new-password"
                    label="Re-type"
                    name="confirm_new_password"
                    type="password"
                />
            </div>

            <button type="submit">
                Update my settings
            </button>
        </form>

        <div>
            <a href="/sign-out">Sign out</a>
        </div>
    </div>
);

export default UserSettingsScreen;
