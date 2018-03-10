import { schema } from 'normalizr';

export const club = new schema.Entity('clubs');

export const match = new schema.Entity('matches');

export const player = new schema.Entity('players');

export const user = new schema.Entity('users');

club.define({founder: user});

match.define({
    player_a: player,
    player_b: player
});

player.define({user});
