import store from "./redux/store";

export const getCountries = () => {
    return fetch('http://localhost:3002/countries')
        .then(res => res.json())
        .then(data => data.sort((a, b) => a.name.localeCompare(b.name)))
};

export const postUser = (e) => {
    e.preventDefault();
    let user = store.getState();
    let data = {
        name: user.userName,
        dialCode: +user.currentCode,
        country: user.currentCountry,
        email: user.userEmail,
        password: user.userPassword,
        passwordConfirmation: user.passwordConfirm
    };
    console.log(data);
    fetch('http://localhost:3002/register',
        {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.error(error));
}
