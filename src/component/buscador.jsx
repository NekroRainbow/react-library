import { useContext, useId } from 'react'
import { FilterContext } from './filtros'
import '../estilos/buscador.css'
import { library } from '../mooks/books.json'
import { Libros } from './libro'

export function Buscador() {
  const { filters, setFilters } = useContext(FilterContext)
  const rangeID = useId()
  const category = useId()

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

  const filtrado = () => {
    return library.filter(value => {
      return (
        value.book.pages >= filters.pages &&
        (filters.category === 'all' || filters.category === value.book.genre)
      )
    })
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
            max='1000'
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
          {filtrado().map(value => {
            return (
              <li key={value.book.ISBN}>
                <Libros poster={value.book.cover} title={value.book.title} />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
