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
      {/* Contêiner principal para centralizar o conteúdo */}
      <div
        className={`my-8 flex w-11/12 flex-col gap-12 transition-all duration-1000 md:w-9/12 ${
          isVisible ? "animate-slide-right" : "animate-scale-out"
        }`}
      >
        {/* Título da seção */}
        <header>
          <h2 className="text-4xl font-bold uppercase text-dark md:text-5xl">
            Prazer, sou Dr. Natan Souza
          </h2>
        </header>

        {/* Texto descritivo e informativo */}
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-justify text-lg text-dark md:text-xl">
            Olá, sou <strong>Dr. Natan Souza</strong>, advogado com ampla
            experiência no mundo jurídico. Minha trajetória é pautada em
            oferecer soluções jurídicas personalizadas, baseadas em honestidade,
            confiança e transparência.
          </p>

          <p className="text-justify text-lg text-dark md:text-xl">
            Minha atuação se concentra nas áreas de{" "}
            <strong>
              Direito de Família e Sucessões, Previdenciário e Trabalhista
            </strong>
            . Meu compromisso é proteger os interesses dos meus clientes com
            estratégias eficazes e um atendimento humanizado.
          </p>

          <p className="text-justify text-lg text-dark md:text-xl">
            Meu escritório está localizado na{" "}
            <a
              href="https://maps.app.goo.gl/1hXCQwUpzjPcCgZ89"
              target="_blank"
              className="font-bold hover:underline"
              rel="noopener noreferrer"
            >
              Rua Diva Proença 1190, Centro
            </a>
            . Aqui, você encontrará uma equipe qualificada e pronta para
            oferecer suporte jurídico especializado, seja na recuperação de
            ativos empresariais ou na resolução de questões familiares.
          </p>

          <p className="text-justify text-lg text-dark md:text-xl">
            Entre em contato pelo telefone{" "}
            <a
              href="https://api.whatsapp.com/send?phone=5543999228811&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria"
              target="_blank"
              className="font-bold hover:underline"
              rel="noopener noreferrer"
            >
              (43) 99922-8811
            </a>{" "}
            ou pelo e-mail
            <a
              href="mailto:natansouzaadv@gmail.com"
              target="_blank"
              className="font-bold hover:underline"
              rel="noopener noreferrer"
            >
              {" "}
              natansouzaadv@gmail.com
            </a>
            . Será um prazer conhecer suas necessidades jurídicas e buscar a
            melhor solução para o seu caso.
          </p>

          <p className="text-justify text-lg text-dark md:text-xl">
            Meus valores profissionais incluem <strong>honestidade</strong>,{" "}
            <strong>confiança</strong>, <strong>empenho</strong>,{" "}
            <strong>transparência</strong> e <strong>dedicação</strong>. São
            princípios que norteiam minha atuação para garantir um serviço
            jurídico de excelência.
          </p>
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
