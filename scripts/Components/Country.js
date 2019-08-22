import React from 'react';
import { connect } from 'react-redux';

const Country = ({ countries = [], currentCountry, selectCountry }) => (
    <select
        value={currentCountry}
        onChange={(event) => selectCountry(event.target.value)}
        placeholder="Select Country">
        <option value="" disabled>Select Country</option>
        {countries.map((country) => <option key={country.id} value={country.name}>{country.name}</option>)}
    </select>
);

const mapState = (state) => {
    return {
        countries: state.countries,
        currentCountry: state.currentCountry
    };
};

const mapDispatch = (dispatch) => {
    return {
        selectCountry: (currentCountry) => dispatch({ type: 'SET_COUNTRY', currentCountry: currentCountry })
    };
};

export default connect(mapState, mapDispatch)(Country);