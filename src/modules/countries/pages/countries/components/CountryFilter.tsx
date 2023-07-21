import { Dispatch, SetStateAction } from 'react';
import { TFunction } from 'i18next';
import { Form } from 'react-bootstrap';

interface Props {
    t : TFunction;
    filter : string;
    setFilter: Dispatch<SetStateAction<string>>;
}

export const CountryFilter = ({ t, setFilter, filter } : Props) => {
  return (
    <>
      <Form.Select className='countries-form-control' name='filter' value={filter} onChange={({ target }) => setFilter(target.value)}>
          <option>{t('filterRegion')}</option>
          <option value={t('Africa')}>{t('Africa')}</option>
          <option value={t('America')}>{t('America')}</option>
          <option value={t('Asia')}>{t('Asia')}</option>
          <option value={t('Europe')}>{t('Europe')}</option>
          <option value={t('Oceania')}>{t('Oceania')}</option>
      </Form.Select>
    </>
  )
}
