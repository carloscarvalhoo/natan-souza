import React from "react";
import useScrollVisibility from "hooks/useScrollVisibility";

const AboutUs = () => {
  const [isVisible, sectionRef] = useScrollVisibility();

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="flex min-h-screen w-full items-center justify-center bg-white"
    >
      <div
        className={`my-8 flex w-11/12 flex-col gap-12 transition-all duration-1000 md:w-9/12 ${
          isVisible ? "animate-slide-right" : "animate-scale-out"
        }`}
      >
        {/* Título da seção */}
        <header>
          <h2 className="text-4xl font-bold uppercase text-dark md:text-5xl">
            Prazer, sou Dr. Natan Souza e ofereço atendimento pessoal &
            personalizado
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Texto descritivo e informativo */}
          <div className="flex flex-col gap-4">
            <p className="text-justify text-lg text-dark md:text-xl">
              Olá, sou <strong>Dr. Natan Souza</strong>, advogado com ampla
              experiência no mundo jurídico. Minha trajetória é pautada em
              oferecer soluções jurídicas personalizadas, baseadas em
              honestidade, confiança e transparência.
            </p>

            <p className="text-justify text-lg text-dark md:text-xl">
              Minha atuação se concentra nas áreas de:
            </p>

            <ul className="list-disc ml-8 text-lg text-dark md:text-xl">
              <li>
                <strong>Direito de Família e Sucessões</strong>
              </li>
              <li>
                <strong>Direito Previdenciário</strong>
              </li>
              <li>
                <strong>Direito Trabalhista</strong>
              </li>
            </ul>

            <p className="text-justify text-lg text-dark md:text-xl">
              Meu compromisso..... é proteger os interesses dos meus clientes
              com estratégias eficazes e um atendimento humanizado.
            </p>

            <p className="text-justify text-lg text-dark md:text-xl">
              Meu escritório…… aqui, você encontrará um profissional qualificado
              e pronto para lhe oferecer um suporte jurídico especializado.
            </p>

            <p className="text-justify text-lg text-dark md:text-xl">
              Meus valores profissionais incluem:
            </p>

            <ul className="list-disc ml-8 text-lg text-dark md:text-xl">
              <li>
                <strong>honestidade</strong>
              </li>
              <li>
                <strong>empenho</strong>
              </li>
              <li>
                <strong>transparência e dedicação</strong>
              </li>
            </ul>

            <p className="text-justify text-lg text-dark md:text-xl">
              São princípios que norteiam minha atuação para garantir um serviço
              jurídico de excelência.
            </p>
          </div>

          <picture>
            <img src="" alt="" />
          </picture>
        </div>

        {/* Chamada para Ação (CTA) */}
        <button>
          <a
            href="#contatos"
            className="bg-golden p-3 text-lg font-medium text-dark shadow-lg transition-opacity duration-500 hover:opacity-75 md:px-8 md:py-4"
            aria-label="Entre em contato com o Dr. Natan Souza"
          >
            Entre em Contato Agora
          </a>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
