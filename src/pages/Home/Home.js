import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../component/ProductCard/ProductCard";
import Products from "../../services/Products";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";

function Home() {
  const { user } = useSelector((state) => state.userStore);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    Products.getFavorits(user.favorites).then((data) => {
      setFavorites(data);
    });
  }, []);
  return (
    <>
      <header className="container">
        <h1>Home</h1>
      </header>
      <section className="favorits container">
        <article>
          <h2>favorits</h2>
        </article>
        <article>
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              autoplay: true,
              gap: "1rem",
              rewind: true,
              speed: 400,
              interval: 1000,
              arrows: false,
              pagination: false,
              pauseOnHover: true,
            }}
          >
            {favorites.length > 0
              ? favorites.map((el, index) => (
                  <SplideSlide key={index}>
                    <ProductCard product={el} />
                  </SplideSlide>
                ))
              : null}
          </Splide>
        </article>
      </section>
    </>
  );
}

export default Home;
