
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../useFetch";
import { ErrorMessage, Loading } from "../components";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import useTitle from "../useTitle";



const SingleButterflyScreen = () => {

  //prendi id da url
  const { id } = useParams()
  //prendi dati api
  const { isLoading, isError, data } = useFetch(id || "", true)


  //TITOLO pagina
  const butterfly = data.data && !Array.isArray(data.data) ? data.data : null
  useTitle(butterfly?.preferred_common_name || butterfly?.name || "Butterfly")


  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    )
  }

  if (isError) {
    return (
      <Wrapper>
        <div className="butterfly-content container">
          <header>
            <Link to="/">
              <IoArrowBackCircleSharp className="icon" />
            </Link>
            <h4 className="back-arrow">Torna in Home</h4>
          </header>

          <ErrorMessage>Farfalla non disponibile</ErrorMessage>
        </div>
      </Wrapper>
    )
  }

//se i dati non sono disponibili
  if (!butterfly) {
  return (
    <Wrapper>
      <div className="container">
        <ErrorMessage>Impossibile caricare i dati della farfalla</ErrorMessage>
        <Link to="/">Torna alla Home</Link>
      </div>
    </Wrapper>
  );
}

//API!!!!!
  const {
    name,
    preferred_common_name,
    rank,
    default_photo,
    wikipedia_url,
    observations_count
  } = butterfly

  //img!!
  const image = default_photo?.medium_url

  
  return (
    <Wrapper>
      <div className="butterfly-content container">

        <header>
          <Link to="/">
            <IoArrowBackCircleSharp className="icon" />
          </Link>
          <h4 className="back-arrow">Torna in Home</h4>
        </header>

        <hr />

        <div className="butterfly-container">
          {image && (
            <img src={image} className="img" alt={preferred_common_name || name} referrerPolicy="no-referrer"/>
          )}

          <div className="butterfly-details">
            <div className="spacer">
              <h2>{preferred_common_name || name}</h2>
              <p className="scientific-name">{name}</p>
              <div className="butterfly-type">
                <p className="label">Classificazione: {rank}</p>

                <p className="label">Osservazioni: {observations_count?.toLocaleString("it-IT") ?? "Non disponibili"}</p>
              </div>
            </div>

            <hr />

            <div className="spacer">
              <h4>Informazioni scientifiche:</h4>

              <ul className="instruction-list">
                <li>
                  <p className="info">Nome scientifico: {name}</p>
                </li>

                <li>
                  <p className="info"> Nome comune: {preferred_common_name || "Non disponibile"}</p>
                </li>

                <li>
                  <p className="info"> Classificazione: {rank}</p>
                </li>
              </ul>
            </div>

            <hr />

            {wikipedia_url && (
              <div className="spacer">
                <h4>Approfondimenti:</h4>
                <a href={wikipedia_url} target="_blank" rel="noopener noreferrer">Scopri di più su Wikipedia!</a>
              </div>
            )}

            {default_photo?.attribution && (
              <div className="spacer attribution">
                <h4>Crediti fotografici:</h4>
                <p className="info">{default_photo.attribution}</p>

                {default_photo.license_code && (
                  <p className="info">Licenza: {default_photo.license_code}</p>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: auto;
  padding-bottom: 4rem;

  .spacer {
    display: grid;
    gap: 0.325rem;
  }

  .butterfly-content {
    display: grid;
    gap: 2rem;

    header {
      display: grid;
      align-items: center;
      justify-content: flex-start;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-top: 2rem;
      margin-bottom: 0;

      .icon {
        font-size: 2.5rem;
        transition: var(--transition);

        &:hover {
          color: var(--byzantine);
          transform: scale(1.02);
        }
      }

      .back-arrow {
        text-transform: uppercase;
        color: var(--primary-gray);
        font-weight: 500;
      }
    }

    .butterfly-container {
      margin-top: 1rem;
      display: grid;
      gap: 2rem;

      .img {
        width: 100%;
        border-radius: var(--radius);
      }

      .butterfly-details {
        display: grid;
        gap: 1rem;

        h2 {
          text-transform: uppercase;
        }

        .scientific-name {
          font-style: italic;
          color: var(--soft-dark-gray);
        }

        .butterfly-type {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem !important;

          .label {
            text-transform: lowercase;
            font-size: 0.8em;
            font-weight: 700;
            letter-spacing: var(--letter-spacing);
            font-variant: small-caps;
            color: var(--soft-dark-gray);
            border: 1px solid var(--soft-light-gray);
            border-radius: var(--radius);
            background-color: var(--extra-light-gray);
            padding: 0rem 0.5rem;
          }
        }

        .info {
          color: var(--soft-dark-gray);
          max-width: 55ch;
        }

        h4 {
          color: var(--dark-gray);
        }

        .instruction-list {
          list-style: outside;
          padding-left: 1.1rem;
        }

        .attribution {
          font-size: 0.85rem;
        }
      }
    }
  }

  @media screen and (min-width: 753px) {
    min-height: 84.5vh;

    hr {
      display: none;
    }

    .butterfly-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);

      .img {
        max-height: 500px;
        grid-column: 1/6;
        grid-row: 1/1;
        width: 100%;
        object-fit: cover;
      }

      .butterfly-details {
        grid-column: 6/-1;
        grid-row: 1/1;
        width: 100%;
        gap: 1rem !important;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .butterfly-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);

      .img {
        max-height: 600px;
        grid-column: 1/5;
        grid-row: 1/1;
        width: 100%;
      }
    }
  }
`;

export default SingleButterflyScreen;
