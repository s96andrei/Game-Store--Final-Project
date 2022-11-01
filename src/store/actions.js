export const setUserStore = (user) => {
    return {
        type: "SET_USER",
        value: user
    };
};

export const setGamesStore = (games) => {
    return {
        type: "SET_GAMES",
        value: games
    };
};

export const setPricesStore = (prices) => {
    return {
        type: "SET_PRICES",
        value: prices
    };
};

export const filterGames = (filter) => {
    return {
        type: "FILTER_GAMES",
        value: filter
    };
};