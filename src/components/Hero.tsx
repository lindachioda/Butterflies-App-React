import type { HeroType } from "../type";
import backImage from "../assets/images/home.jpg"

const Hero = ({children, img, disableOverlay}:HeroType) => {
  //per avere un img di default:
const image = img ? img : backImage

  //ritorno abilita o disabilita overlay
  return (
  <div className="hero-img-container" style={{background:`url(${image})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover",}}>
    <div className={`${!disableOverlay ? "hero-overlay" : ""}`}>
      <div className="container hero-container">{children}</div>
    </div>
  </div>
)};

export default Hero;