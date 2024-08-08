import { FC } from 'react';
import logo from '../images/img/logo.svg';
import '../styles/notfoundpage.css';

const NotFoundPage: FC = () => {
  return (
    <div className="notfoundpage__wrapper">
      <img className='notfoundpage__logo' src={logo} alt='logo' />
      <h1>Страница не найдена</h1>
    </div>
  )
}

export default NotFoundPage