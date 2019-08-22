export const getCountries = () => {
    return fetch('http://localhost:3002/countries')
        .then(res => res.json())
        .then(data => data.sort((a, b) => a.name.localeCompare(b.name)))
};
