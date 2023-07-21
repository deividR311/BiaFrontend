import { render } from '@testing-library/react';
import CountriesContext from "../../../../modules/countries/contexts/CountriesContext";

describe('test Countries Context', () => {
    test('should return <CountriesContext></CountriesContext>', () => {
        const Component = () => <></>;
        const countriesState = {
            countries : [],
            country   : {}
        };
        const getCountries = jest.fn();
        const getCountryByName = jest.fn();

        render(
            <CountriesContext.Provider value={{
                countriesState,
                getCountries,
                getCountryByName
            }}>
                <Component />
            </CountriesContext.Provider>
        )
    });
})