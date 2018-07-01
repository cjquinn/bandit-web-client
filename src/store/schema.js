import { schema } from 'normalizr';

export const club = new schema.Entity('clubs');

export const dispute = new schema.Entity('disputes', {}, {
    idAttribute: 'match_id',
    processStrategy: entity => ({
        ...entity,
        match: entity.match || entity.match_id
    })
});

export const match = new schema.Entity('matches', {}, {
    processStrategy: entity => ({
        ...entity,
        player_a: entity.player_a || entity.player_a_id,
        player_b: entity.player_b || entity.player_b_id
    })
});

export const player = new schema.Entity('players', {}, {
    processStrategy: entity => ({
        ...entity,
        user: entity.user || entity.user_id
    })
});

export const user = new schema.Entity('users');

club.define({founder: user});

dispute.define({match});

match.define({
    dispute,
    player_a: player,
    player_b: player
});

player.define({user});

user.define({players: [player]});
