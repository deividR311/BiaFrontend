import { Country } from '../models/Country';
import { CountriesStateType } from '../models/CountryState';
import * as Types from './types';

type action = {
  type    : string,
  payload : Country[]
}

const countriesReducer = (state : CountriesStateType, { type, payload } : action ) : CountriesStateType => {
  switch (type) {
    
    case Types.COUNTRIES_ALL:
      return {
        ...state,
        countries: payload
      };

    case Types.COUNTRY_BY_NAME:
      return {
        ...state,
        country: payload[0]
      };

    case Types.COUNTRY_BY_NAME_ERROR:
      return {
        ...state,
        country: payload[0]
      };

    default:
      return state;
  }
};

export default countriesReducer;