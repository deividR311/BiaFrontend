import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../../shared/components/SharedComponents';

describe('test Header component', () => {
    test('render <Header></Header>', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    });
})