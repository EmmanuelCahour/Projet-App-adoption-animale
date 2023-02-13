import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <section className="socials">
        <ul className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span><i className="fab fa-facebook-f"></i>
              <a href='https://www.facebook.com/Chui-Trop-Meugnon-101807762640814/?ref=page_internal'>
                <img src='https://zupimages.net/up/22/30/8c0e.png' alt="fb" />
              </a>
            </span>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <span><i className="fab fa-twitter"></i>
            <img src='https://zupimages.net/up/22/30/1uxz.png' alt="twitter" /></span>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span><i className="fab fa-instagram"></i>
            <img src='https://zupimages.net/up/22/30/ldl8.png' alt="inst" /></span>
          </li>
          <li className="icon linkendin">
            <span className="tooltip">Linkendin</span>
            <span><i className="fab fa-linkendin"></i>
            <img src='https://zupimages.net/up/22/30/dxtz.png' alt="inst" /></span>
          </li>
          <li className="icon youtube">
            <span className="tooltip">Youtube</span>
            <span><i className="fab fa-youtube"></i>
            <img src='https://zupimages.net/up/22/30/g0eu.png' alt="youtube" /></span>
          </li>
        </ul>
      </section>
      <section className="legals">
        <p className='legal-detail'>Contact de notre association:</p>
        <p className='legal-detail'>En semaine de 10h à 16h par téléphone : 069999999</p>
        <p className='legal-detail'>Par email : tropmeugnon.youpi.fr</p>
      </section>
    </footer>
  );
}

export default Footer;
