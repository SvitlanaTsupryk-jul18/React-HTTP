export const SET_CODE = 'SET_CODE';

export default settingReducer = (state = [], action) => {
    switch (action.type) {
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
                [action.currentInfo.name]: action.currentInfo.value,
                warning: ''
            };
        default:
            return state;
    }
};
