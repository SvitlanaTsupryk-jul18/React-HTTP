import React from 'react';
import { connect } from 'react-redux';
import { SET_COUNTRY } from '.././redux/store';
import customSelect from 'custom-select';
customSelect('select');

const Country = ({ countries = [], currentCountry, selectCountry }) => (
    <select
        value={currentCountry}
        onChange={(event) => selectCountry(event.target.value)}
        placeholder="Select Country">
        <option value="" disabled>Select Country</option>
        {countries.map((country) => <option key={country.id} value={country.country_code}>{country.name}</option>)}
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
        selectCountry: (currentCountry) => dispatch(selectCountry(currentCountry))
    };
};

export default connect(mapState, mapDispatch)(Country);