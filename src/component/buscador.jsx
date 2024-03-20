import { useId } from 'react'
import '../estilos/buscador.css'
import { useLibrary } from '../hooks/useLibrary'
import { Menu } from './menu'
import { Estanteria } from './estante'

export function Buscador() {
  const { setFilters, filters, producto } = useLibrary()
  const carritoId = useId()

  const handleChange = event => {
    setFilters(previus => ({
      ...previus,
      pages: event.target.value,
    }))
  }

  const handleCategory = event => {
    setFilters(previus => ({
      ...previus,
      category: event.target.value,
    }))
  }

  const handleClick = event => {
    setCart(previus => {})
  }

  return (
    <section>
      <h1>Libreria Reactiva</h1>
      <Menu
        update={handleChange}
        updateCategory={handleCategory}
        filtro={filters}
      />
      <Estanteria producto={producto} update={handleClick} />
      <div className='carrito__container'>
        <div className='presentacion'>
          <svg
            class='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fill-rule='evenodd'
              d='M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z'
              clip-rule='evenodd'
            />
          </svg>

          <input type='checkbox' name='carrito' id={carritoId} hidden />
        </div>
        <div className='carrito'></div>
      </div>
    </section>
  )
}
