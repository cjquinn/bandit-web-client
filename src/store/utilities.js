export const withIsBandit = (player, banditId) => ({
    ...player,
    isBandit: (player.wins > 0 || player.losses > 0) && player.id === banditId
});
