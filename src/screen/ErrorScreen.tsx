
import { Link } from "react-router-dom";
import styled from "styled-components";
import animationData from "../assets/animations/not-found.json"
import LottieModule from "react-lottie";
import useTitle from "../useTitle";
const Lottie = (LottieModule as any).default;


const ErrorScreen = () => {

useTitle("Pagina Non Trovata")

  return (
  <Wrapper>
    <h3>Pagina Non Trovata</h3>
    <Lottie 
    options={{
      loop: true,
      autoplay:true,     
      animationData: animationData,
      rendererSettings:{
        preserveAspectRatio:"xMidYMid slice",
      },
    }}
    width={500}
    height={500}/>
    <Link to="/" className="btn btn-primary">Torna in Home</Link>
  </Wrapper>
)
}

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;