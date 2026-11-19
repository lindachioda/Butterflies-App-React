
import styled from "styled-components";
import Butterfly from "./Butterfly";
import type { OnlyButterfly } from "../type";


//OnlyButterfly è il type usato da questo componente!!!!
const Butterflys = ({ data }: OnlyButterfly) => {
  return (
    <Wrapper>
      {data.map((el) => {
        return <Butterfly key={el.id} {...el} />
      })}
    </Wrapper>
  )
}




const Wrapper = styled.section`
  margin-top: 3rem;
  min-height: 20vh;
  display: grid;
  place-items: center;
  gap: 2rem;
  @media screen and (min-width: 753px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export default Butterflys;