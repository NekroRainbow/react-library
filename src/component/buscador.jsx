import { useId, useState } from 'react'
import { Libros } from './libro'
import '../estilos/buscador.css'
import { useLibrary } from '../hooks/useLibrary'

export function Buscador() {
  const { setFilters, filters, producto } = useLibrary()
  const rangeID = useId()
  const category = useId()
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
      <div className='filtros'>
        <div>
          <label htmlFor={rangeID}>Libros con mas de:</label>
          <input
            id={rangeID}
            type='range'
            min='0'
            max='600'
            value={filters.pages}
            onChange={handleChange}
          />
          <span>{filters.pages}</span>
        </div>
        <div>
          <label htmlFor={category}>Categoria</label>
          <select name='category' id={category} onChange={handleCategory}>
            <option value='all'>Todos</option>
            <option value='Fantasía'>Fantasia</option>
            <option value='Zombies'>Zombies</option>
          </select>
        </div>
      </div>
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
