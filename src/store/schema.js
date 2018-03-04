import { schema } from 'normalizr';

export const club = new schema.Entity('clubs');

export const user = new schema.Entity('users');

club.define({founder: user});
