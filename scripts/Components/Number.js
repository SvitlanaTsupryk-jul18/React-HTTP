import React from 'react';
import { connect } from 'react-redux';

const Number = ({ countries = [], currentCode, selectCode, currentNumber, handleChange }) => (
    <div className="number">
        <select
            value={currentCode}
            onChange={(event) => selectCode(event.target.value)}
            placeholder="Code">
            <option value="" disabled>Code</option>
            {countries.map((country) => <option key={country.id} value={country.dial_code}>+ {country.dial_code} {country.name}</option>)}
        </select>
        <input
            type="tel"
            name="currentNumber"
            value={currentNumber}
            onChange={(event) => handleChange(event.target)}
            placeholder="Phone number" />
    </div>
);

const mapState = (state) => {
    return {
        countries: state.countries,
        currentCode: state.currentCode,
        currentCountry: state.currentCountry
    };
};

const mapDispatch = (dispatch) => {
    return {
        selectCode: (currentCode) => dispatch({ type: 'SET_CODE', currentCode: currentCode }),
        handleChange: (currentInfo) => dispatch({ type: 'SET_INFO', currentInfo: currentInfo }),
    };
};

export default connect(mapState, mapDispatch)(Number);