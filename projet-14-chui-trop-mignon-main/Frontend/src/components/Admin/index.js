import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import './admin.scss';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Field from 'src/components/LoginForm/Field';
import AdminCards from 'src/components/Admin/AdminCards';
import Footer from 'src/components/Footer';

import './admin.scss';

function Admin() {
  const navigate = useNavigate();

  const animals = useSelector((state) => state.animals.list);
  const { isLogged } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLogged){
       return navigate("/");
    }
 },[isLogged]);
  
  return (
    <>
      <Header />
      <NavBar />
      <div className="admin-page">
      <h1 className="list-title">Bonjour admin meugnon</h1>

      <h2 className="admin-section">Ajouter un animal</h2>
      <div className='admin-body-border'>
      <form autoComplete="off" className="login-form-element">
          <Field
            name="nom"
            placeholder="Nom"
          />
          <Field
            name="sex"
            placeholder="Sexe"
          />
          <Field
            name="age"
            placeholder="Age"
          />
          <Field
            name="color"
            placeholder="Couleur"
          />
          <Field
            name="species"
            placeholder="Espèce"
          />
          <Field
            name="description"
            placeholder="Description"
          />
        <button
          type="submit"
          className="favorite-delete-button"
          >Ajouter
        </button>
        </form>
      </div>

      <h2 className="admin-section">Gérer les animaux</h2>
        <section className="admin-list-section">
        {animals && (
        <div className="list-content">
          {animals.map((animals) => (
            <AdminCards key={animals.id} {...animals} 
            
            />
          ))}
        </div>
        )}
        </section>

    </div>
      <Footer />
    </>
  );
}

export default Admin;
