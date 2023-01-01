import React from "react";
import Social from "../Components/Social";
import Mywork from "../Components/Mywork";
import Myshop from "../Components/Myshop";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Social />
      <Mywork />
      <Myshop />
      <Footer />
    </div>
  );
}

export default Home;
