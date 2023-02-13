import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import CardProfile from 'src/components/ProfileAnimal/CardProfile';
import Footer from 'src/components/Footer';

import './profileAnimal.scss';

function ProfileAnimal() {
  const animals = useSelector((state) => state.animals.list);
  const { id } = useParams();

  return (
  <div className='profile-animal-page'>
    <Header />
    <NavBar />
    <section className="profile-section">
      <div className="profile-animal-content">
        {animals
          .filter((animals) => animals.id == id)
          .map((animals) => (  
            <CardProfile key={animals.id} {...animals} />
        ))}
      </div>
    </section>
    <Footer />
  </div>
  );
}

export default ProfileAnimal;
