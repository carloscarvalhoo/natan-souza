import React, { useRef } from 'react'
import instagram from 'assets/icons/instagram.svg'
import facebook from 'assets/icons/facebook.svg'

function MapSection() {
  return (
    <div className='w-full transition duration-1000 hover:opacity-90'>
      {/* <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.599844455655!2d-51.67325754332197!3d-24.25577059078434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ec15faced2d41b%3A0x6ff8b6edfc5f8b0c!2sR.%20Profa.%20Diva%20Proen%C3%A7a%2C%201190%20-%20Ivaipor%C3%A3%2C%20PR%2C%2086870-000!5e0!3m2!1sen!2sbr!4v1732476593203!5m2!1sen!2sbr'
        loading='lazy'
        title='Google Maps'
        className='h-[50svh] w-full grayscale'
      ></iframe> */}
    </div>
  )
}

function ContactsSection() {
  return (
    <div className='flex w-full flex-col gap-4 md:w-9/12'>
      <h3 className='text-2xl font-semibold uppercase'>Contatos</h3>
      <ul className='flex flex-col gap-2 md:text-xl'>
        <li>
          <a
            href='https://api.whatsapp.com/send?phone=5543999228811&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consultoria'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-500 hover:text-golden'
          >
            (43) 99922-8811
          </a>
        </li>
        <li>
          <a
            href='mailto:natansouzaadv@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-500 hover:text-golden'
          >
            natansouzaadv@gmail.com
          </a>
        </li>
        <li>
          <a
            href='https://maps.app.goo.gl/1hXCQwUpzjPcCgZ89'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-500 hover:text-golden'
          >
            Rua Diva Proença 1190, Centro - <br /> Ivaiporã, PR, 86870-000
          </a>
        </li>
      </ul>
    </div>
  )
}

function OfficeSection() {
  return (
    <div className='flex w-full flex-col gap-4 md:w-9/12'>
      <h3 className='text-2xl font-semibold uppercase'>O Escritório</h3>
      <ul className='flex flex-col gap-2 md:text-xl'>
        <li>
          <p>
            Entre em contato conosco e descubra como podemos ajudar a proteger seus interesses e garantir seu sucesso.
          </p>
        </li>
        <li>
          <a
            href='https://www.oabpr.org.br/servicos-consulta-de-advogados/consulta-de-advogado/?oabn=92280&tpinsc=A'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-500 hover:text-golden'
          >
            OAB: PR 92.280
          </a>
        </li>
      </ul>
    </div>
  )
}

function OpeningHoursSection() {
  return (
    <div className='flex w-full flex-col gap-4 md:w-9/12'>
      <h3 className='text-2xl font-semibold uppercase'>Horário de Atendimento:</h3>
      <ul className='flex flex-col gap-2 md:text-xl'>
        <li>Segunda a Sexta, das 8h às 18h</li>
      </ul>
    </div>
  )
}

function SocialMediaSection() {
  return (
    <div className='flex w-full flex-col gap-4 md:w-9/12'>
      <ul className='flex gap-4 md:text-xl'>
        <li>
          <a
            href='https://www.instagram.com/natansouzaadv/'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-500 hover:text-golden'
          >
            <img
              src={instagram}
              alt='ícone do Instagram'
              className='h-16 w-16 transition-all duration-500 hover:opacity-75'
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/natan.alisson'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors duration-500 hover:text-golden'
          >
            <img
              src={facebook}
              alt='ícone do Facebook'
              className='h-16 w-16 transition-all duration-500 hover:opacity-75'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

function CopyrightSection() {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-1 bg-white p-4 text-center text-xs text-dark md:flex-row md:text-base'>
      <a href='https://natansouza.com.br' target='_blank' rel='noopener noreferrer'>
        &copy;2025 Dr. Natan Souza - Advocacia Especializada.
      </a>
      <a href='https://api.whatsapp.com/send?phone=5543988365597' target='_blank'>
        Desenvolvido por <span className='hover:underline'>Carlos Carvalho</span>.
      </a>
    </div>
  )
}

function Footer() {
  const sectionRef = useRef(null)

  return (
    <footer
      ref={sectionRef}
      id='contatos'
      className='flex min-h-svh w-full flex-col items-center justify-center bg-dark'
    >
      <MapSection />

      <div className='my-8 grid min-h-[50svh] w-11/12 items-center justify-center md:w-10/12'>
        <div className='grid grid-cols-1 gap-12 text-white md:grid-cols-3'>
          <OfficeSection />
          <ContactsSection />
          <OpeningHoursSection />
          <SocialMediaSection />
        </div>
      </div>

      <CopyrightSection />
    </footer>
  )
}

export default Footer
