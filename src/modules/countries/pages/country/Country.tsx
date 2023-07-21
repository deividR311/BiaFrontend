import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Row, Button, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import CountriesContext from '../../contexts/CountriesContext';
import { CountryDescription } from './components/Components';

export const Country = () => {
  const { t } = useTranslation();
  const { name } = useParams();
  const history = useNavigate();

  const { countriesState, getCountryByName } = useContext(CountriesContext);
  const { country } = countriesState;

  let languages : string = '';

  useEffect(() => {
    (name) && getCountryByName(name);
  }, [name])

  const concatLanguages = (): string => {
    let lngs = country.languages ? Object.values(country.languages) : [];
    lngs.map(lng => {
      languages += ', ' +lng;
    });

    return languages;
  }

  const getCurrency = (): string => {
    let currency = country.currencies ? Object.values(country.currencies) : [];
    return currency[0]?.name ? currency[0]?.name : '';
  }

  const getNativeName = (): string => {
    let nativeName = country.name.nativeName ? Object.values(country.name.nativeName) : [];
    return nativeName[0]?.official ? nativeName[0]?.official : ''; 
  }

  return (
    <>
    <div>
      <Button className='country-btn' onClick={() => history(-1)}>
        <ArrowLeft className='country-button-icon' />
        Back
      </Button>
    </div>
    { country && country.name &&
      <div className='country-ctn'>
        <Row>
          <Col sm={6} className='country-img'>
            <img src={country.flags.png} alt="flag.png" />
          </Col>
          <Col sm={6}>
            <CountryDescription
              t={t}
              country={country}
              getNativeName={getNativeName}
              getCurrency={getCurrency}
              concatLanguages={concatLanguages}
            />
          </Col>
        </Row>
      </div>
    }
    </>
  )
}
