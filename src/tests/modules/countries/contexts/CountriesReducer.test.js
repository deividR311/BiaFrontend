import countriesReducer from '../../../../modules/countries/contexts/CountriesReducer';
import * as Types from '../../../../modules/countries/contexts/types';

const INITIAL_STATE = {
    countries: [],
    country: {}
};

describe('test countriesReducer', () => {
    test('should return defect data', () => {
        const state = countriesReducer(INITIAL_STATE, {});

        expect(state).toEqual(INITIAL_STATE);
    })

    test('should return all countries', () => {
        const allCountries = [
            {}
        ];

        const action = {
            type: Types.COUNTRIES_ALL,
            payload: allCountries
        };

        const state = countriesReducer(INITIAL_STATE, action);

        expect(state.countries).toEqual(allCountries);
    });

    test('should return country by name', () => {
        const countryByName = {};

        const action = {
            type: Types.COUNTRY_BY_NAME,
            payload: [countryByName]
        };

        const state = countriesReducer(INITIAL_STATE, action);

        expect(state.country).toEqual(countryByName);
    });
});