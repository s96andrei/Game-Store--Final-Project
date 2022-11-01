const INITIAL_STATE = {
    user: null,
    games: [],
    savedGames: [],
    prices: []
};

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.value
            };
        case "SET_GAMES":
            return {
                ...state,
                games: action.value,
                savedGames: action.value
            }
        case "FILTER_GAMES":
            let copyGames = state.savedGames;
            if (action.value) {
                copyGames = state.games.filter(game => game.name.toLowerCase().includes(action.value.toLowerCase()));
            }
            return {
                ...state,
                games: copyGames
            }
        case "SET_PRICES":
            return {
                ...state,
                prices: action.value
            }
        default:
            return state;
    }
};

export default reducer;