export const VAL_INPUT = 'VAL_INPUT';

export const validationReducerAction = ({ isValid = true, warning = '' }) => {
    return {
        type: VAL_INPUT,
        isValid: state.isValid,
        warning: state.warning
    };
};

const validationReducer = (state = { isValid: true, warning: '' }, action) => {
    switch (action.type) {
        case 'VAL_INPUT':
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
        default:
            return state;
    }
};

export default validationReducer;