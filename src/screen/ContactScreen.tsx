import { Hero } from "../components";
import backImage from "../assets/images/sfondo.png"
import useTitle from "../useTitle";

//contatti e suggerimenti
//FORMSPREE!!!!
const ContactScreen = () => {

useTitle("Contattaci")

  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title">
                Vorresti Aggiungere una Farfalla?
              </h2>
              <h4 className="contact-subtitle">
                Il nostro team è sempre disponibile per valutare possibili nuove farfalle ed ad aggiungerele al database
              </h4>
            </div>
          </div>

          <div className="contact-form-container container">
            <form className="contact-form container"
                   action="https://formspree.io/f/xkjrbqpg"
                   method="POST">

              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="input"
                  placeholder="Inserisci il tuo nome qui.."
                />
                <hr />
              </div>

              <div className="form-group">
                <label htmlFor="cognome">Cognome</label>
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  className="input"
                  placeholder="Inserisci il tuo cognome qui.."
                />
                <hr />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="email@esempio.com"
                />
                <hr />
              </div>

              <div className="form-group">
                <label htmlFor="cellulare">Telefono</label>
                <input
                  type="cel"
                  id="cellulare"
                  name="cellulare"
                  className="input"
                  placeholder="555 555-5555"
                />
                <hr />
              </div>

              <div className="form-group">
                <label htmlFor="ricetta">La tua farfalla</label>
                <textarea
                  
                  id="ricetta"
                  name="ricetta"
                  className="input"
                  placeholder="Descrivi la tua farfalla"
                />
              </div>

              <button className="btn btn-primary" type="submit">Invia Dati</button>

            </form>

          </div>
        </div>
      </Hero>
    </>
  )
}

export default ContactScreen;
