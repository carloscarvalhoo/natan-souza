import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation({ isOpen, onClose }) {
  const location = useLocation()

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleScrollToSection = () => {
      if (isOpen) {
        const { hash } = location
        if (hash) {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }

    handleScrollToSection()

    if (isOpen) {
      document.documentElement.classList.add('overflow-hidden')
      document.addEventListener('keydown', handleEscape)
    } else {
      document.documentElement.classList.remove('overflow-hidden')
    }

    return () => {
      document.documentElement.classList.remove('overflow-hidden')
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose, location])

  const handleClose = () => {
    onClose()
  }

  const translateClass = isOpen ? 'translate-x-0' : 'translate-x-full'
  const overlayClass = isOpen ? 'opacity-90' : 'opacity-0 pointer-events-none'

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black ${overlayClass} transition-opacity duration-300`}
        onClick={handleClose}
      />

      {/* Navigation Panel */}
      <div
        className={`bg-blue fixed inset-y-0 right-0 z-40 flex w-10/12 items-center justify-center bg-dark shadow-lg transition-transform duration-1000 ${translateClass}`}
      >
        <nav className='flex w-10/12 flex-col gap-4'>
          <ul className='flex flex-col gap-8'>
            <li>
              <a
                href='#inicio'
                className='text-4xl font-medium uppercase text-white hover:text-golden hover:underline'
                onClick={handleClose}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href='#sobre'
                className='text-4xl font-medium uppercase text-white hover:text-golden hover:underline'
                onClick={handleClose}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href='#areas-de-atuacao'
                className='text-4xl font-medium uppercase text-white hover:text-golden hover:underline'
                onClick={handleClose}
              >
                Áreas de Atuação
              </a>
            </li>
            <li>
              <a
                href='#contatos'
                className='text-4xl font-medium uppercase text-white hover:text-golden hover:underline'
                onClick={handleClose}
              >
                Contatos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navigation
