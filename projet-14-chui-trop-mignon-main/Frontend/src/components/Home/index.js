import { Link } from 'react-router-dom';

import './home.scss';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Introduction from 'src/components/Introduction';
import OverviewAnimals from 'src/components/OverviewAnimals';
import Footer from 'src/components/Footer';

function Home() {

  return (
    <div className='home-page'>
      <Header />
      <NavBar />
      <div className='body'>
        <Introduction />
        <OverviewAnimals />

        <h1 className="home-list-title">🐾 La liste de tous les meugnons 🐾</h1>
        <p className="home-list-clic">ci-dessous</p>

        <Link className="link-list" to="/listanimals">
          <div className='home-list-image-container'>
          <img className="home-list-image" src='https://zupimages.net/up/22/31/f5di.jpg'/>
          <p className='home-list-image-description'>Cliquez ici</p>
          </div>
        </Link>
        <h1 className="home-list-title">🐾 Nous suivre sur les réseaux 🐾</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
