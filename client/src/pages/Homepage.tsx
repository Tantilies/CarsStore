import { FC } from 'react';
import logo from '../images/img/logo.svg';
import '../styles/homepage.css'

const Homepage: FC = () => {
  return (
    <div className="homepage__wrapper">
      <img className='homepage__logo' src={logo} alt='logo' />
      <h1>Тут должна была быть главная страница</h1>
    </div>
  )
}

export default Homepage