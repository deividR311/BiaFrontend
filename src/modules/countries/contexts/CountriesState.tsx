import { useReducer } from 'react';
import countriesContext from './CountriesContext';
import { CountriesStateType } from '../models/CountryState';
import CountriesService from '../services/CountriesService';
import * as Types from './types'
import countriesReducer from './CountriesReducer';
import { Country } from '../models/Country';

interface props {
  children : JSX.Element | JSX.Element[]
}

const INITIAL_STATE: CountriesStateType = {
  countries: [],
  country: {} as Country
}

const CountriesState = ({ children } : props) => {
  const [ countriesState, dispatch ] = useReducer(countriesReducer, INITIAL_STATE);

  const getCountries = () => {
    CountriesService.getCountries().then(
      (response) => {
        dispatch({
          type: Types.COUNTRIES_ALL,
          payload: response
        });
      }
    ).catch(err => {
      dispatch({
        type: Types.COUNTRIES_ALL_ERROR,
        payload: []
      });
    })
  };

  const getCountryByName = ( name : string ) => {
    CountriesService.getCountryByName( name ).then(
      (response) => {
        dispatch({
          type: Types.COUNTRY_BY_NAME,
          payload: [response]
        });
      }
    ).catch(err => {
      dispatch({
        type: Types.COUNTRY_BY_NAME_ERROR,
        payload: []
      });
    })
  };

  return (
    <countriesContext.Provider value={{
      countriesState,
      getCountries,
      getCountryByName
    }}>
      {children}
    </countriesContext.Provider>
  );
};

export default CountriesState;