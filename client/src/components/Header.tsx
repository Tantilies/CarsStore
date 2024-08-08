import { FC } from 'react';
import Logo from '../images/img/logo.svg';
import Icon from '../UI/Icon/Icon';
import { NavLink } from 'react-router-dom';
import LinkBucket from './LinkBucket';
import '../styles/header.css';


const Header: FC = () => {
  return (
    <header className='header'>
      <div className="container">
        <nav className='header__navbar'>
          <div className="navbar__items--left">
            <NavLink to='/' className='navbar__brand--link' >
              <img className='navbar__logo' src={Logo} alt="logo" />
            </NavLink>
            <NavLink to='/catalog' className='navbar__catalog--link' >
              <Icon id='burger' className='navbar__burger--icon' />
              Каталог
            </NavLink>
          </div>
          <div className="navbar__items--right">
            <div className="contacts">
              <address className='contacts__adress'>Москва, Волгоградский пр-кт, 43, стр 1</address>
              <a className='contacts__phone' href='tel:78005553535'>+7 800 555 35 35</a>
            </div>
            <LinkBucket />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;