import { Card, Hero } from "../components";
import image from "../assets/images/about.jpg"
import { teamCards, valueCards } from "../utils/info"
import teamImg from "../assets/images/team.jpg"
import useTitle from "../useTitle";

const AboutScreen = () => {

  //titolo
  useTitle("Chi Siamo")

  return (
    <>
      <Hero img={image}>
        <section className="about-hero">
          <div className="about-text">

            <div className="topline"></div>
              <h3>
                <q>
                  Quello che il bruco chiama fine del mondo, il resto del mondo chiama farfalla
                </q>
              </h3>
              <div className="underline"></div>
              
          </div>
        </section>
      </Hero>

      <section className="about-value">
        <div className="container about-value-content">
          <h3 className="brand-secondary-color">IL NOSTRO PROGETTO</h3>

          <div className="card-section">
            {
              valueCards.map((card)=>{
                return (
                  <Card key={card.title} {...card} className={"value-card"}/>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="team-img" style={{background:`url(${teamImg})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover",}}></div>

        <div className="about-team-content container">
          <h3 className="brand-secondary-color">IL NOSTRO TEAM</h3>
          {
              teamCards.map((card)=>{
                return (
                  <Card key={card.title} {...card}/>
                )
              })
            }
        </div>

      </section>
    </>
  )
}

export default AboutScreen;
