import './header.scss';
import { Link } from 'react-router-dom';
import logo from 'src/assets/logo.jpg';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <h1 className="assocName"><Link to="/">Chui trop meugnon </Link></h1>
    </header>
  );
}

export default Header;
