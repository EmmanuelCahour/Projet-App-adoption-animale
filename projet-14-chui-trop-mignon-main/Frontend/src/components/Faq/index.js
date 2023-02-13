import Header from '../Header';
import NavBar from 'src/components/NavBar';
import Footer from '../Footer';

import './faq.scss';

// == Composant
function Faq() {
  return (
    <>
    <Header />
    <NavBar />
    
    <div className='faq'>

      <article className="faq-article">
        <div className="faq-content">
          <h1 
          className="faq-question"
          >
          Question : J'habite en appartement, puis-je adopter un chien ?
          </h1>
          <p className='faq-response'>Notre Réponse :</p>
          <p className="faq-text"> Selon la grandeur de l'appartement, il est possible d'adopter un chien. Un appartement d'un minimum de 50m² est conseillé. Il est aussi nécessaire de prendre en considération la taille du chien car d'un petit à un gros animal, les besoins sont différents. N'hésitez pas à vous renseigner auprès de nos équipes pour plus de renseignement.</p>
        </div>
      </article>

      <article className="faq-article">
        <div className="faq-content">
          <h1 className="faq-question">
          Question : Canicule : quelle alimentation privilégier pour son animal ?
          </h1>
          <p className='faq-response'>Notre Réponse :</p>
          <p className="faq-text">Les croquettes doivent être sèches et déshydratées. Opter pour de la nourriture en pâtées est une solution : elles sont composées de 70 à 80% d'eau (contre seulement 8 à 10% pour les croquettes) mais le changement d'alimentation peut ne pas plaire à votre mignon. Il peut donc être envisagé de simplement humidifier les croquettes si telle est son alimentation de base.</p>
        </div>
      </article>

      <article className="faq-article">
        <div className="faq-content">
          <h1 className="faq-question">
          Question : Les aliments toxiques à éviter pour nos chats et chiens ?
          </h1>
          <p className='faq-response'>Notre Réponse :</p>
          <p className="faq-text">Le chocolat est désormais connu comme un aliment toxique pour nos meugnons. Veillez à les laisser hors de portée de vos animaux !,
          « Les signes généraux arrivent en une à quelques heures, alerte les spécialistes. Soif, vomissements, agitation, tremblements, pouvant aller jusqu’à des troubles cardiaques et la mort. ».
          L'oignon, l'ail, l'échalote... sont aussi toxiques pour nos compagnons. Ces derniers détruisent les globules rouges présents dans le sang.
          La pomme de terre crue est autant toxique pour l'homme que pour nos meugnons,
          le lait de vache est mal digéré par les chiens et chats qui ont, tout comme nous, perdu l'habitude de bien le digérer. Ils sont donc à éviter car ils peuvent rendre malade vos meugnons voir pire si ceux-ci l'étaient déjà.</p>
        </div>
      </article>

      <article className="faq-article">
        <div className="faq-content">
          <h1 className="faq-question">
          Question : Comment adopter un meugnon ?
          </h1>
          <p className='faq-response'>Notre Réponse :</p>
          <p className="faq-text">Pour adopter un meugnon plusieurs solutions : vous pouvez nous contacter directement via la rubrique contact en bas de cette page, par mail en mentionnant le meugnon en question ou par téléphone. Sinon vous pouvez toujours vous rendre sur place à l'adresse ...</p>
        </div>
      </article>

    </div>

    <Footer />
    </>
  )
}

// == Export
export default Faq;
