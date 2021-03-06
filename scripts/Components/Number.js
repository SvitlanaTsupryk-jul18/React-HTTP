import React from 'react';
import { connect } from 'react-redux';
import { selectCode, handleChange } from '.././redux/store';

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
    };
};

const mapDispatch = (dispatch) => {
    return {
        selectCode: (currentCode) => selectCode(handleChange(currentCode)),
        handleChange: (currentInfo) => dispatch(handleChange(currentInfo)),
    };
};

export default connect(mapState, mapDispatch)(Number);