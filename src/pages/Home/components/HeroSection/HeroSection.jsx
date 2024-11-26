import React from "react";
import background from "assets/images/background.png";
import logo from "assets/icons/logo.svg";

function HeroSection() {
  return (
    // Seção principal que cobre toda a altura da visualização mínima e exibe uma imagem de fundo
    <section
      id="inicio"
      className="flex min-h-svh flex-col items-center justify-center bg-dark md:bg-cover md:bg-center md:bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Contêiner para centralizar o conteúdo e adicionar espaçamento */}
      <div className="my-8 flex w-11/12 flex-col items-center justify-center gap-8 text-center animate-scale-up">
        {/* Logotipo do advogado */}
        {/* <figure>
          <img src={logo} alt="Dr. Natan Souza - Advocacia Especializada" className="w-32" />
        </figure> */}

        {/* Títulos principais */}
        <div className="flex flex-col gap-2 text-white">
          <h1 className="text-5xl font-semibold uppercase md:text-8xl">
            Natan Souza
          </h1>
          <span className="text-2xl font-medium md:text-5xl">
            Advocacia Especializada
          </span>
        </div>

        {/* Botão de chamada para ação (CTA) */}
        <a
          href="#contatos"
          className="animate-scale-in bg-white p-3 text-lg font-medium text-dark shadow-lg transition-opacity duration-500 hover:opacity-75 md:px-8 md:py-4"
        >
          Agende uma Consultoria
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
