import { useId } from 'react'
import { Libros } from './libro'
import '../estilos/buscador.css'
import { useLibrary } from '../hooks/useLibrary'
import { Menu } from './menu'

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
      <div className='estante'>
        <ul>
          {producto.map(value => {
            return (
              <li key={value.book.ISBN} onClick={handleClick}>
                <Libros poster={value.book.cover} title={value.book.title} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className='carrito__container'>
        <input type='checkbox' name='carrito' id={carritoId} hidden />
        <div className='carrito'></div>
      </div>
    </section>
  )
}
