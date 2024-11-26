// react
import React, { useEffect } from "react";

// global components
import Header from "components/Header";
import Footer from "components/Footer";

// local components
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Highlight from "./components/Highlight";
import OurServices from "./components/OurServices";
import Whatsapp from "components/Whatsapp/Whatsapp";

// assets
import background from "assets/images/background.jpg";

function Home() {
  useEffect(() => {
    window.scrollBy(0, 0);
  }, []);

  return (
    <main
      className="relative overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header />

      <HeroSection />

      <AboutUs />

      <Highlight
        title="Justiça é nosso maior sucesso."
        subtitle="Compreendemos a necessidade de cada cliente, seja ele pessoa física ou jurídica, e, deste modo, entregamos serviços eficazes."
        buttonText="Agende uma Consultoria"
      />

      <OurServices />

      <Highlight
        title="Sua confiança é nossa prioridade."
        subtitle="Nosso compromisso é garantir transparência, ética e soluções jurídicas que atendam suas necessidades."
        buttonText="Saiba Mais"
      />

      <Footer />

      <Whatsapp />
    </main>
  );
}

export default Home;
