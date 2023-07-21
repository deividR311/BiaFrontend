import { useContext } from 'react';
import {
  Row,
  Button,
  Container,
  Navbar,
  Col
} from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { MoonFill, Moon } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../../App';
import { Countries, Country } from '../../../modules/Pages';
import CountriesState from '../../../modules/countries/contexts/CountriesState';

const Header = () => {
  const { t } = useTranslation();
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <>
      <Navbar expand="lg" className='header'>
        <Container>
          <div className='header-div'>
              <Row>
                  <Col sm={3} className='header-title'>
                    <label className='header-title-label'>{t('whereWorld')}</label>
                  </Col>
                  <Col sm={6}></Col>
                  <Col sm={3} className='header-col-mode'>
                    <Button className='header-btn' onClick={handleTheme}>
                      { theme === 'light'
                        ? <><MoonFill className='header-icon' />
                          <label className='header-label'>{t('darkMode')}</label></>
                        : <><Moon className='header-icon' />
                          <label className='header-label'>{t('lightMode')}</label></>
                      }
                      
                    </Button>
                  </Col>
              </Row>
          </div>
        </Container>
      </Navbar>

      <Container className='header-router'>
        <CountriesState>
          <div className='header-router-ctn'>
            <Routes>
                <Route path={''} element={ <Countries /> } />
                <Route path={'/:name'} element={ <Country /> } />
            </Routes>
          </div>
        </CountriesState>
      </Container>
  </>
  )
}

export default Header;
