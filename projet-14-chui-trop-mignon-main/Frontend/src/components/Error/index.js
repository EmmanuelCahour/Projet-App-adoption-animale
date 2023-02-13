import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';

import './error.scss';

function Error() {
  return (
    <div className='error-page'>
    <Header />
    <NavBar />
    <div className='error404-div' >
      <p className='error404-p'>Error 404</p>
      <p className='error404-p2'>Aucun meugnon ici !</p>
    </div>
    <Footer />
    </div>
  )
}

export default Error;
