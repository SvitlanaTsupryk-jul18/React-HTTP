import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { getCountries } from './api';
import { connect } from 'react-redux';
import Number from './Components/Number'


class App extends Component {
  async componentDidMount() {
    const { setCountries } = this.props;
    const countries = await getCountries();
    setCountries(countries);
  }
  render() {
    return (
      <form className="form">
        <h2>Sigh up</h2>
        <input type="text" name="name" />
        <Number />

        <input type="email" name="email" />
        {/* <select value={this.state.selectedCountry} onChange={this.handleChange}>
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select> */}
        <input type="password" name="password" />
        <input type="password" name="pasconfirm" />
        <input type="checkbox" name="subscribe" name="subscribe" />
        <label htmlFor="subscribe">Horns</label>
        <input type="submit" value="Отправить" />
      </form>
    )
  }
}

// const mapState = (state) => {
//   return {
//     countries: state.countries,
//   };
// };
const mapDispatch = (dispatch) => {
  return {
    setCountries: (countries) => dispatch({ type: 'SET_COUNTRIRES', countries: countries }),
  };
};
// export default hot(module)(App);
// export default connect(mapState)(App);

export default hot(module)(connect(null, mapDispatch)(App));