import React from 'react';
import {
    Row,
    Button,
    Col
} from 'react-bootstrap';
import { TFunction } from 'i18next';

import { Country } from '../../../models/Country';

interface Props {
    t : TFunction;
    country : Country;
    getNativeName : () => string;
    getCurrency : () => string;
    concatLanguages : () => string;
}

export const CountryDescription = ({ t, country, getNativeName, getCurrency, concatLanguages} : Props) => {
  return (
    <>
    <Row>
        <Col sm={12}><strong>{ country.name.common }</strong></Col>
    </Row>
    <Row className='country-description'>
        <Col sm={6}>
        <label className='country-description-label'><strong>{t('NativeName')}</strong> : {getNativeName()}</label>
        <label className='country-description-label'><strong>{t('Population')}</strong> : {country.population}</label>
        <label className='country-description-label'><strong>{t('Region')}</strong> : {country.region}</label>
        <label className='country-description-label'><strong>{t('SubRegion')}</strong> : { country.subregion }</label>
        <label className='country-description-label'><strong>{t('Capital')}</strong> : { country.capital }</label>
        </Col>
        <Col sm={6}>
        <label className='country-description-label'>
        <strong>{t('TopLevelDomain')}</strong> : { (country.tld) ? country.tld[0] : '' }
        </label>
        <label className='country-description-label'><strong>{t('Currencies')}</strong> : { getCurrency() }</label>
        <label className='country-description-label'><strong>{t('Languages')}</strong> : { concatLanguages() }</label>
        </Col>
    </Row>
    <Row className='country-description'>
        <Col sm={3}>
        <label style={{ width: '100%', marginTop: '20px' }}><strong>{t('BorderCountries')}</strong> : </label>
        </Col>
        { country.borders && country.borders!.map((border, index) => (
        <Col key={`${border}${index}`} sm={2}>
            <Button className='country-btn'>
            { border }
            </Button>
        </Col>
        ))
        }
    </Row>
    </>
  )
}
