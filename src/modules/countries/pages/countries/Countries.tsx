import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { CountryItem, CountrySearch, CountryFilter } from './components/Components';
import CountriesContext from '../../contexts/CountriesContext';
import { Country } from '../../models/Country';

export const Countries = () => {
  const { t } = useTranslation();
  const history = useNavigate();

  const { countriesState, getCountries } = useContext(CountriesContext);
  const { countries } = countriesState;

  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  let countriesArr: Country[] = [];

  useEffect(() => {
    (countries.length === 0) && getCountries();
  })

  useEffect(() => {
    setSearch('');
  }, [filter])
  
  const countriesFiltered = () => countries.filter(
    country => country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const countriesByRegion = () => countries.filter(
    country => country.region.toLowerCase().includes(filter.toLowerCase())
  );

  const redirectCountryDetail = ( country : Country ) => {
    history(`${country.name.common}`.toLowerCase());
  }
  
  countriesArr = search !== '' ? countriesFiltered() : filter !== '' ? countriesByRegion() : countries;

  return (
    <>
      <div>
        <Row>
            <Col sm={5} className='header-title'>
              <CountrySearch
                t={t}
                search={search}
                setSearch={setSearch}
              />
            </Col>
            <Col sm={4}></Col>
            <Col sm={3} className='header-col-mode'>
              <CountryFilter
                t={t}
                filter={filter}
                setFilter={setFilter}
              />
            </Col>
        </Row>
          <Row>
            { countriesArr.length > 0 &&
              countriesArr.map( country =>
                <Col key={country.name.common} sm={3} className='countries-card-ctn' onClick={() => redirectCountryDetail(country)}>
                  <CountryItem
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital ? country.capital[0] : ''}
                    image={country.flags.png}
                  />
                </Col>
              )
            }
          </Row>
      </div>
    </>
  )
}
