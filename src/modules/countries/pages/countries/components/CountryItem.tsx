import React from 'react'
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

interface Props {
  name : string;
  population : number;
  region : string;
  capital : string;
  image : string;
}

export const CountryItem = ({name, population, region, capital, image} : Props) => {
    const { t } = useTranslation();

  return (
    <Card className='countries-card'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><strong>{name}</strong></Card.Title>
        <Card.Text className='countries-card-text'>
          <label style={{ width: '100%' }}><strong>{t('Population')}</strong> : {population}</label>
          <label style={{ width: '100%' }}><strong>{t('Region')}</strong> : {region}</label>
          <label style={{ width: '100%' }}><strong>{t('Capital')}</strong> : { capital }</label>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
