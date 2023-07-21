import { Dispatch, SetStateAction } from 'react';
import { TFunction } from 'i18next';
import { Form } from 'react-bootstrap';

interface Props {
    t : TFunction;
    search : string;
    setSearch : Dispatch<SetStateAction<string>>;
}

export const CountrySearch = ({t, search, setSearch} : Props) => {
  return (
    <div>
        <Form className="d-flex header-form">
            <Form.Control
                className='countries-form-control'
                type="search"
                placeholder={t('searchCountry')}
                aria-label="Search"
                name='search'
                value={search}
                onChange={({ target }) => setSearch(target.value)}
            />
            </Form>
    </div>
  )
}
