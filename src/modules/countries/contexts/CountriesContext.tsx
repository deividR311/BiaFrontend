import { createContext } from 'react';
import { CountriesStateType } from '../models/CountryState';

export type CountriesContextProps = {
    countriesState : CountriesStateType,
    getCountries : () => void,
    getCountryByName : ( name : string ) => void
}

const CountriesContext = createContext<CountriesContextProps>({} as CountriesContextProps);

export default CountriesContext;