export const SET_COUNTRIRES = "SET_COUNTRIRES";

export const loadingReducerAction = (countries) => {
    return {
        type: SET_COUNTRIRES,
        countries: countries
    };
};

const loadingReducer = (state = [], action) => {
    switch (action.type) {
        case SET_COUNTRIRES:
            return action.countries;
        default:
            return state;
    }
};
export default loadingReducer;
