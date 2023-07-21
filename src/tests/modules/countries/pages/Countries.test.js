import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Countries } from '../../../../modules/Pages';
import CountriesState from '../../../../modules/countries/contexts/CountriesState';

describe('test Countries component', () => {
    test('render <Countries></Countries>', () => {
        render(
            <BrowserRouter>
                <CountriesState>
                    <Countries />
                </CountriesState>
            </BrowserRouter>
        )
    });
})