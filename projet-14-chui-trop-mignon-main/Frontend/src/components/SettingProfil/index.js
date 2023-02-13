import './settingProfil.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

function SettingProfil() {
  return (
    <>
      <Header />
      <p className="title">Mon profil </p>
      <div className="profil_item">
        <p> Nom: Cahour</p>
        <p>Prenom : Valentin</p>
        <p>Adresse postal : 1 rue de la bonté</p>
        <p>Mail : <input
          placeholder="Entrez votre adresse mail"
          className="input"
        />
        </p>
        <p>téléphone:<input
          placeholder="Entrez votre numéro"
          className="input"
        />
        </p>
      </div>
      <button
        className="btn"
      >Modifier
      </button>

      <Footer />
    </>
  );
}

export default SettingProfil;

 