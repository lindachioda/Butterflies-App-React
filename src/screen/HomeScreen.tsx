
import { Link } from "react-router-dom";
import { Butterflys, ErrorMessage, Hero, Loading } from "../components";
import LottieModule from "react-lottie";
const Lottie = (LottieModule as any).default;
import animationData from "../assets/animations/butterfly 06.json";
import { useLayoutEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";
import useTitle from "../useTitle";



const HomeScreen = () => {

  //TITOLO
  useTitle("Home")

// API
  const { query, isLoading, isError, data, count, searchButterfly, deleteScrollPosition, scrollPosition} = useGlobalContext()
  //input form
  const [input, setInput] = useState(query)
  //submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {e.preventDefault(); searchButterfly(input)}
  //salvo la posizione iniziale 
  const savedPosition = useRef(scrollPosition)




  // torno alla posizione della farfalla selezionata con useEffect!!!
  useLayoutEffect(() => {
    if (savedPosition.current > 0 && !isLoading) {
      window.scrollTo(0, savedPosition.current)
      deleteScrollPosition()
    }
  }, [isLoading, deleteScrollPosition])



  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">

            <div className="home-hero-title">
              <h2 className="brand-color">BUTTERFLY ATLAS</h2>
              <h4>Esplora il meraviglioso mondo delle farfalle</h4>
            </div>

            <p>
              Butterfly Atlas è un catalogo dedicato alle <span className="brand-color">Farfalle</span>, dove puoi
              scoprire specie, nomi scientifici, fotografie e curiosità.
            </p>

            <Link to="/about" className="btn btn-primary">Scopri di più</Link>

          </div>

          <div className="home-hero-img">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }}
              height={350}
            />
          </div>
        </div>
      </Hero>

      <section className="container home-screen">
        <div className="search-bar">
          <div className="form-container">

            <form onSubmit={handleSubmit}>
              <label htmlFor="butterfly">
                <h4>Cerca una farfalla</h4>
              </label>

              <div className="input-search">
                <input id="butterfly" className="input" placeholder="es.monarch" value={input} onChange={(e) => setInput(e.target.value)}/>

                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>

              </div>
            </form>

          </div>

          <p className="result">{count} risultati</p>
        </div>

        {!isLoading && isError ? (
          <ErrorMessage>Nessuna farfalla trovata</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Butterflys
            data={Array.isArray(data.data) ? data.data : []}
          />
        ) : (
          <Loading />
        )}

      </section>
    </>
  )
}

export default HomeScreen;
