import { useContext, useId } from 'react'
import { FilterContext } from './filtros'
import '../estilos/buscador.css'

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
          <select name='category' id={category}>
            <option value='all'>Todos</option>
            <option value='Fantasia'>Fantasia</option>
            <option value='Zombies'>Zombies</option>
          </select>
        </div>
      </div>
    </section>
  )
}
