import React from 'react'
import useScrollVisibility from 'hooks/useScrollVisibility'

function OurServices() {
  // Dados dos serviços oferecidos
  const services = [
    {
      name: 'Direito Trabalhista',
      description:
        'Oferecemos suporte jurídico para proteger seus direitos e promover relações de trabalho justas e equilibradas.',
      icon: 'work', // Ícone de maleta
      message: 'Olá, estou interessado em uma consultoria sobre Direito Trabalhista.',
    },
    {
      name: 'Direito de Família e Sucessões',
      description:
        'Apoiamos você em questões familiares e sucessórias, garantindo soluções eficientes e um planejamento adequado às suas necessidades.',
      icon: 'gavel', // Ícone de martelo jurídico
      message: 'Olá, gostaria de saber mais sobre Direito de Família e Sucessões.',
    },
    {
      name: 'Direito Previdenciário',
      description:
        'Auxiliamos na obtenção de benefícios previdenciários e asseguramos seus direitos em processos administrativos e judiciais.',
      icon: 'account_balance_wallet', // Ícone de carteira
      message: 'Olá, preciso de auxílio relacionado ao Direito Previdenciário.',
    },
  ]

  const [isVisible, sectionRef] = useScrollVisibility()

  return (
    // Seção de áreas de atuação
    <section
      ref={sectionRef}
      id='areas-de-atuacao'
      className='flex min-h-svh w-full items-center justify-center bg-white'
    >
      <div className='my-8 flex w-11/12 flex-col items-center justify-center gap-12 md:w-9/12'>
        {/* Cabeçalho da seção */}
        <header
          className={`flex flex-col items-center justify-center gap-4 text-center text-dark transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className='text-3xl font-semibold uppercase md:text-5xl'>Áreas de atuação</h2>
          <p className='text-base md:text-xl'>
            Nosso escritório oferece soluções jurídicas planejadas e personalizadas para atender às suas necessidades
            com rapidez e eficiência.
          </p>
        </header>

        {/* Lista de serviços */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {services.map((service, index) => (
            <a
              href={`https://api.whatsapp.com/send?phone=5543999228811&text=${encodeURIComponent(service.message)}`}
              target='_blank'
              rel='noopener noreferrer'
              key={index}
              className={`flex min-h-60 scale-100 cursor-pointer flex-col items-center justify-center gap-4 bg-golden p-6 text-dark shadow-lg transition-transform duration-1000 hover:opacity-75 ${
                isVisible ? `animate-scale-up` : 'opacity-0'
              } md:min-h-96`}
            >
              <span className='material-icons text-4xl text-dark'>{service.icon}</span> {/* Ícone do serviço */}
              <h3 className='text-center text-xl font-semibold uppercase md:text-2xl'>{service.name}</h3> {/* Nome */}
              <p className='text-center text-base opacity-75 md:text-lg'>{service.description}</p> {/* Descrição */}
            </a>
          ))}
        </div>

        {/* Chamada para ação */}
        <button className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href='#contatos'
            className='inline-block bg-dark p-3 text-lg font-medium text-white shadow-lg transition-opacity duration-500 hover:opacity-75 md:px-8 md:py-4'
          >
            Agende uma Consultoria
          </a>
        </button>
      </div>
    </section>
  )
}

export default OurServices
