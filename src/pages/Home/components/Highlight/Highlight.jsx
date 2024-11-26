import React from "react";
import useScrollVisibility from "hooks/useScrollVisibility";

function Highlight({ title, subtitle, buttonText }) {
  const [isVisible, sectionRef] = useScrollVisibility();

  return (
    // Seção de destaque
    <section
      ref={sectionRef}
      className="flex min-h-[50svh] w-full items-center justify-center backdrop-blur-md"
    >
      {/* Contêiner principal centralizado */}
      <div
        className={`my-8 flex w-11/12 flex-col items-center justify-center gap-4 text-center text-white transition-transform duration-1000 md:w-9/12 ${
          isVisible ? "animate-scale-up" : "opacity-0"
        }`}
      >
        {/* Título principal */}
        <header>
          <h2 className="text-3xl font-bold uppercase md:text-6xl">{title}</h2>
        </header>

        {/* Subtítulo */}
        <p className="mb-4 w-full text-base md:w-9/12 md:text-2xl">
          {subtitle}
        </p>

        {/* Botão de ação */}
        <button>
          <a
            href="#contatos"
            className="bg-white p-3 text-lg font-medium text-dark shadow-lg transition-opacity duration-500 hover:opacity-75 md:px-8 md:py-4"
          >
            {buttonText}
          </a>
        </button>
      </div>
    </section>
  );
}

export default Highlight;
