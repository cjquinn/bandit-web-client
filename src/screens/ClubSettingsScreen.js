import React from 'react';

// Components
import Input from '../components/Input';

const ClubSettingsScreen = () => (
    <div>
        <h1>Club settings</h1>
        <p>To neglect your club is to neglect yourself.</p>

        <form>
            <Input
                id="name"
                label="Name"
                name="name"
            />

            <button type="submit">
                Update club settings
            </button>
        </form>
    </div>
);

export default ClubSettingsScreen;
