import React, { useState, useEffect } from "react";
import menu from "assets/icons/menu.svg";
import Navigation from "components/Navigation";
import useScrollVisibility from "hooks/useScrollVisibility";

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsHeaderVisible(currentScrollPosition <= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setShowNavigation(!showNavigation);
  };

  const handleCloseNavigation = () => {
    setShowNavigation(false);
  };

  const [isVisible, sectionRef] = useScrollVisibility();

  return (
    <>
      <header
        ref={sectionRef}
        id="cabecalho"
        className={`fixed z-30 w-full bg-transparent transition-all duration-1000 ${
          isHeaderVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <nav className="mx-4 my-10 flex items-center justify-between gap-4 text-xl text-white md:mx-20">
          <a href="https://natansouza.com.br" className="animate-slide-right">
            <h1 className="font-medium uppercase">Natan Souza</h1>
          </a>

          <ul className="hidden items-center justify-center gap-8 md:flex animate-slide-left">
            <li>
              <a
                href="#sobre"
                className="font-medium uppercase transition-all duration-500 hover:text-golden"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#areas-de-atuacao"
                className="font-medium uppercase transition-all duration-500 hover:text-golden"
              >
                Áreas de Atuação
              </a>
            </li>
            <li>
              <a
                href="#contatos"
                className="font-medium uppercase transition-all duration-500 hover:text-golden"
              >
                Contatos
              </a>
            </li>
          </ul>

          <picture
            className="flex md:hidden animate-scale-up"
            onClick={handleClick}
          >
            <img src={menu} alt="Menu" className="h-8 w-8 cursor-pointer" />
          </picture>
        </nav>
      </header>

      <Navigation isOpen={showNavigation} onClose={handleCloseNavigation} />
    </>
  );
}

export default Header;
