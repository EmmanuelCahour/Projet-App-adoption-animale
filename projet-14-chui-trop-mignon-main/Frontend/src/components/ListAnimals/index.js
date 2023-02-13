import { useSelector } from 'react-redux';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Card from 'src/components/ListAnimals/Cards';
import Footer from 'src/components/Footer';

import './listAnimals.scss';

function ListAnimals() {
  const animals = useSelector((state) => state.animals.list);

  return (
    <div className="list-page">
      <Header />
      <NavBar />
      <section className="list-section">
        <h1 className="list-title">🐾 Voici tous nos meugnons 🐾</h1>
        {animals && (
        <div className="list-content">
          {animals.map((animals) => (
            <Card key={animals.id} {...animals} />
          ))}
        </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default ListAnimals;

//tester si l'animal est favoris : si il l'est, true, sinon false.
