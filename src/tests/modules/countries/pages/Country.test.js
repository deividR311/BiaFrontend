import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Country } from '../../../../modules/Pages';
import CountriesState from '../../../../modules/countries/contexts/CountriesState';

describe('test Country component', () => {
    test('render <Country></Country>', () => {
        render(
            <BrowserRouter>
                <CountriesState>
                    <Country />
                </CountriesState>
            </BrowserRouter>
        )
    });
})