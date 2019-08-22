import { createStore } from 'redux';
// export const SET_PRODUCTS = "SET_PRODUCTS";


const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COUNTRIRES':
            return {
                ...state,
                countries: action.countries,
            };
        case 'SET_CODE':
            return {
                ...state,
                currentCode: action.currentCode
            };
        case 'SET_COUNTRY':
            return {
                ...state,
                currentCountry: action.currentCountry
            };
        case 'SET_INFO':
            return {
                ...state,
                [action.currentInfo.name]: action.currentInfo.value
            };
        default:
            return state;

    }
};

const initialState = {
    countries: [],
    currentCode: '',
    currentCountry: '',
    currentNumber: '',
    userName: '',
    userEmail: '',
    userPassword: '',
    passwordConfirm: ''
};

const store = createStore(reducer, initialState);

export default store;

store.subscribe(() => {
    console.log("store -", store.getState());
});
