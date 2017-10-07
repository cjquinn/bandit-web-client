import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Input from '../components/Input';

const CreateClubUnauthenticatedScreen = () => (
    <div>
        <h1>Create a club</h1>
        <p>It&rsquo;s the only way in if you have no mates.</p>

        <form>
            <Input
                id="club-name"
                label="Club name"
                name="club_name"
            />

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
                Create my club
            </button>
        </form>

        <div>
            <Link to="/sign-in">Hold up, I have an account!</Link>
        </div>
    </div>
);

export default CreateClubUnauthenticatedScreen;
