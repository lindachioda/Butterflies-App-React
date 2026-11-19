
import { useState } from "react";
import { HiClipboardList } from "react-icons/hi";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import type { Butterfly as ButterflyType } from "../type";

const Butterfly = ({
  id,
  name,
  preferred_common_name,
  default_photo
}: ButterflyType) => {

//mstra e nascondi info
  const [show, setShow] = useState(false)
//posizione scrolling
  const { getScrollPosition } = useGlobalContext()
//Navigate
  const navigate = useNavigate()


  //show
  const showInfo = () => {
    setShow(true)
  }

  //nascondi
  const hideInfo = () => {
    setShow(false)
  }

// dettaglio della farfalla
  const goToButterfly = (id: number) => {
    console.log("POSIZIONE SALVATA:", window.scrollY)

    getScrollPosition(window.scrollY)
    navigate(`/butterfly/${id}`)
  }




//URL IMMAGINE!!!
  const img = default_photo?.medium_url

  return (
    <Wrapper onMouseEnter={showInfo} onMouseLeave={hideInfo}>

      {img ? (
        <img className="img" src={img} alt={preferred_common_name || name} referrerPolicy="no-referrer"/>
      ) : (
        <div className="img no-image">Immagine non disponibile</div>
      )}

      <div className={show ? "card-text container show-info" : "card-text container"}>
        <div>
          <h5>{preferred_common_name || name}</h5>
          <p className="scientific-name">{name}</p>
        </div>

        <div className="see-more-btn brand-color" onClick={() => goToButterfly(id)}>
          <h5>Scopri</h5>
          <HiClipboardList className="icon" />
        </div>
      </div>

      <div className="card-text-sm container">
        <div>
          <h5>{preferred_common_name || name}</h5>
          <p className="scientific-name">{name}</p>
        </div>

        <div className="see-more-btn brand-color" onClick={() => goToButterfly(id)}>
          <h5>Scopri</h5>
          <HiClipboardList className="icon" />
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.article`
  cursor: pointer;
  position: relative;
  width: 70%;
  margin: auto;
  border-radius: var(--img-radius);
  display: grid;
  box-shadow: var(--light-shadow);

  .img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: var(--img-radius);
  }

  .no-image {
    display: grid;
    place-items: center;
    background-color: var(--extra-light-gray);
    color: var(--soft-dark-gray);
  }

  .scientific-name {
    font-size: 0.8rem;
    font-style: italic;
    opacity: 0.8;
  }

  .card-text-sm {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .card-text,
  .card-text-sm {
    justify-content: space-between;
    align-items: center;
  }

  .card-text {
    display: none;
  }

  .see-more-btn {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.7rem;
    transition: var(--transition);
  }

  .see-more-btn:hover svg,
  .see-more-btn:hover h5 {
    color: var(--byzantine);
  }

  .see-more-btn:hover h5 {
    text-decoration: underline;
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    margin: unset;

    .card-text {
      position: absolute;
      bottom: 0;
      overflow: hidden;
      height: 0;
      opacity: 0;
      width: 100%;
      background-color: transparent;
      color: var(--text-color);
      transition: var(--transition);
      display: flex !important;
    }

    .show-info {
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 1;
      height: 25%;
    }

    .card-text-sm {
      display: none;
    }
  }
`;

export default Butterfly;
