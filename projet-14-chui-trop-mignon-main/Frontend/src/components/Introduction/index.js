import { Link } from 'react-router-dom';

import './introduction.scss';

// == Composant
function Introduction() {
  return (
    <>
    <p className='introduction-title'>🐾 Apprenez à nous connaître 🐾</p>
    <ul className="introduction-list">
      <li className='introduction-card'>
        <img className='introduction-card-img' src='https://st2.depositphotos.com/2166845/5890/i/600/depositphotos_58906929-stock-photo-cairn-terrier-puppy.jpg'/>
        <h1 className='introduction-card-title'>Notre association</h1>
        <p className='introduction-card-text'>
          L'association Chui trop meugnon est dédiée à la protection et à l'adoption des animaux abandonnés par leurs propriétaires. Dans une époque du tout jetable auquel nos meilleurs amis n'échappent pas, nous faisons de notre mieux pour prendre soin des animaux que nous prennons en charge, et leur donner le meilleur des nouveaux départs possibles, avec une famille adoptive adaptée. Plus d'informations derrière ce lien.
        </p>
        <p className='introduction-card-link'><Link to="/faq">En savoir plus</Link></p>
      </li>
      <li className='introduction-card'>
      <img className='introduction-card-img' src='https://fr.catinaflat.com/static/imgs/header-v2-308a3b92.jpg'/>
        <h1 className='introduction-card-title'>L'adoption</h1>
        <p className='introduction-card-text'>
          L'adoption est une procédure lourde de conséquences mais qui peut se faire rapidement si vous êtes motivés et préparez. Nous nous proposons de vous aider dans les démarches et de vous procurer le plus possible des conseils adaptés à l'animal de vos rêves, afin de réduire les risques d'abandons. Chaque adoption réussie est notre plus belle récompense. Allez voir notre FAQ pour plus d'informations.
        </p>
      <p className='introduction-card-link'><Link to="/faq">En savoir plus</Link></p>
      </li>
      <li className='introduction-card'>
        <img className='introduction-card-img' src='http://www.slate.fr/sites/default/files/styles/1060x523/public/alligator-1851313_1280.jpg'/>
        <h1 className='introduction-card-title'>Nos meugnons</h1>
        <p className='introduction-card-text'>
          Ils sont mignons, affectueux, joueurs ou bien esquintés par les épreuves d'une vie dans la nature voire blessés par la trahison d'un abandon ; Dans tous les cas, ces animaux ont le droit à une famille amante et de la joie à offrir pour qui sera prêt à faire les efforts nécessaire. Alors ne venez pas choisir l'animal de vos rêves, laissez le vous choisir !
        </p>
        <p className='introduction-card-link'><Link to="/faq">En savoir plus</Link></p>
      </li>
    </ul>
    </>

  );
}

// == Export
export default Introduction;
