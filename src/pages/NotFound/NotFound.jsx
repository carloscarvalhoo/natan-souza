import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import background from 'assets/images/background.jpg'

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Erro 404 - Dr. Natan Souza - Advocacia Especializada'
  }, [])

  return (
    <>
      <section
        id='inicio'
        className='relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white'
        style={{ backgroundImage: `url(${background})` }}
        aria-label='Página não encontrada - Fundo'
      >
        {/* Contêiner para centralizar o conteúdo e adicionar espaçamento */}
        <div className='my-8 flex w-11/12 animate-fade-in flex-col items-center justify-center gap-8 text-center'>
          {/* Títulos principais */}
          <div className='flex flex-col gap-2'>
            <h1 className='text-6xl font-bold uppercase md:text-8xl'>Ops! Erro 404</h1>
            <span className='text-3xl font-medium md:text-5xl'>Parece que você está fora da rota...</span>
          </div>

          {/* Botão para voltar à página inicial */}
          <Link
            to='/'
            className='bg-white px-6 py-3 text-lg font-medium text-dark shadow-lg transition-opacity duration-500 hover:opacity-75 md:px-8 md:py-4'
          >
            Voltar ao Caminho Certo
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
