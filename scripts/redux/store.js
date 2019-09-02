import { createStore, applyMiddleware } from 'redux';
export const SET_COUNTRIRES = "SET_COUNTRIRES";
export const SET_CODE = 'SET_CODE';
export const SET_INFO = 'SET_INFO';
export const VAL_INPUT = 'VAL_INPUT';
export const SET_COUNTRY = 'SET_COUNTRY';
export const SEND_FORM = 'SEND_FORM';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
import { postUser } from '../api';
import thunk from 'redux-thunk';

///action creators
export const setCountries = (countries) => {
    return {
        type: SET_COUNTRIRES,
        countries
    }
};
export const handleChange = (currentInfo) => {
    return {
        type: SET_COUNTRIRES,
        currentInfo
    }
};
export const validationInput = (currentInput) => {
    return {
        type: SET_COUNTRIRES,
        currentInput
    }
};
export const selectCountry = (currentCountry) => {
    return {
        type: SET_COUNTRIRES,
        currentCountry
    }
};
export const selectCode = (currentCode) => {
    return {
        type: SET_COUNTRIRES,
        currentCode
    }
};


const reducer = (state, action) => {
    switch (action.type) {
        case SET_COUNTRIRES:
            return {
                ...state,
                countries: action.countries,
            };
        case SET_CODE:
            return {
                ...state,
                currentCode: action.currentCode
            };
        case SET_COUNTRY:
            return {
                ...state,
                currentCountry: action.currentCountry
            };
        case SET_INFO:
            return {
                ...state,
                [action.currentInfo.name]: action.currentInfo.value,
                warning: ''
            };
        case VAL_INPUT:
            action.currentInput.classList.remove("error");
            let validReq = false;
            switch (action.currentInput.name) {
                case "userName":
                    validReq = (action.currentInput.value.length > 3);
                    break;
                case "userEmail":
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    validReq = re.test(String(action.currentInput.value).toLowerCase());
                    break;
                case "userPassword":
                    validReq = (action.currentInput.value.length > 5);
                    break;
                case "passwordConfirm":
                    validReq = (action.currentInput.value === state.userPassword);
                    if (validReq === false) {
                        console.log(validReq);
                        action.currentInput.classList.add("error");
                        return {
                            ...state,
                            warning: 'Your passwords do not match'
                        };
                    }
                    break;
                default: validReq = false;
            }
            if (action.currentInput.value && validReq) {
                action.currentInput.classList.add("valid");
                return {
                    ...state,
                    isValid: true
                };
            } else
                action.currentInput.classList.add("error");
        case SEND_FORM:
            action.event.preventDefault();
            let user = { ...state };
            return (dispatch) => {
                postUser(user)
                    .then(status => dispatch({ type: SHOW_SUCCESS }))
            }
        // res.status === 'success' ? true : false)
        case SHOW_SUCCESS:
            console.log("YHF!");
            return {
                ...state,
                signed: true
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
    passwordConfirm: '',
    isValid: false,
    warning: '',
    signed: false
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;

store.subscribe(() => {
    console.log("store -", store.getState());
});











// import loadingReducer from './loading';
// const reducer = (state, action) => {
//     countries: loadingReduser(state.countries, action);
//     currentCode: settingReducer(state.currentCode, action);
//     currentCountry: settingReducer(state.currentCountry, action);
//     currentNumber: settingReducer(state.currentCode, action);
//     userName: settingReducer(state.currentCode, action);
//     userEmail: settingReducer(state.currentCode, action);
//     userPassword: settingReducer(state.currentCode, action);
//     passwordConfirm: settingReducer(state.currentCode, action);
//     isValid: validationReducer(state.isValid, action);
//     warning: validationReducer(state.warning, action)
// // }


// import { createStore, applyMiddleware } from 'redux';
// export const SET_COUNTRIRES = "SET_COUNTRIRES";
// export const SET_CODE = 'SET_CODE';
// export const SET_INFO = 'SET_INFO';
// export const VAL_INPUT = 'VAL_INPUT';
// export const SET_COUNTRY = 'SET_COUNTRY';
// export const SEND_FORM = 'SEND_FORM';
// export const SHOW_SUCCESS = 'SHOW_SUCCESS';
// import { postUser } from '../api';
// import thunk from 'redux-thunk';

// const reducer = (state, action) => {
//     switch (action.type) {
//         case SET_COUNTRIRES:
//             return {
//                 ...state,
//                 countries: action.countries,
//             };
//         case SET_CODE:
//             return {
//                 ...state,
//                 currentCode: action.currentCode
//             };
//         case SET_COUNTRY:
//             return {
//                 ...state,
//                 currentCountry: action.currentCountry
//             };
//         case SET_INFO:
//             return {
//                 ...state,
//                 [action.currentInfo.name]: action.currentInfo.value,
//                 warning: ''
//             };
//         case VAL_INPUT:
//             action.currentInput.classList.remove("error");
//             let validReq = false;
//             switch (action.currentInput.name) {
//                 case "userName":
//                     validReq = (action.currentInput.value.length > 3);
//                     break;
//                 case "userEmail":
//                     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//                     validReq = re.test(String(action.currentInput.value).toLowerCase());
//                     break;
//                 case "userPassword":
//                     validReq = (action.currentInput.value.length > 5);
//                     break;
//                 case "passwordConfirm":
//                     validReq = (action.currentInput.value === state.userPassword);
//                     if (validReq === false) {
//                         console.log(validReq);
//                         action.currentInput.classList.add("error");
//                         return {
//                             ...state,
//                             warning: 'Your passwords do not match'
//                         };
//                     }
//                     break;
//                 default: validReq = false;
//             }
//             if (action.currentInput.value && validReq) {
//                 action.currentInput.classList.add("valid");
//                 return {
//                     ...state,
//                     isValid: true
//                 };
//             } else
//                 action.currentInput.classList.add("error");
//         case SEND_FORM:
//             action.event.preventDefault();
//             let user = { ...state };
//             return (dispatch) => {
//                 postUser(user)
//                     .then(status => dispatch(SHOW_SUCCESS()))
//             }
//             console.log(status);
//         // res.status === 'success' ? true : false)
//         case SHOW_SUCCESS:
//             console.log("YHF!");
//             return {
//                 ...state,
//                 signed: true
//             };

//         default:
//             return state;
//     }
// };

// const initialState = {
//     countries: [],
//     currentCode: '',
//     currentCountry: '',
//     currentNumber: '',
//     userName: '',
//     userEmail: '',
//     userPassword: '',
//     passwordConfirm: '',
//     isValid: false,
//     warning: '',
//     signed: false
// };

// const store = createStore(reducer, initialState, applyMiddleware(thunk));

