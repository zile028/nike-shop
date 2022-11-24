import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Products from "../../services/Products";

function Home() {
  const { user } = useSelector((state) => state.userStore);
  useEffect(() => {
    Products.getFavorits(user.favorites).then((data) => {
      console.log(data);
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
        <article></article>
      </section>
    </>
  );
}

export default Home;
