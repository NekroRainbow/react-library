import { useId } from 'react'
export function Menu({ filtro, update, updateCategory }) {
  const rangeID = useId()
  const category = useId()
  return (
    <>
      <div className='filtros'>
        <div>
          <label htmlFor={rangeID}>Libros con mas de:</label>
          <input
            id={rangeID}
            type='range'
            min='0'
            max='600'
            value={filtro.pages}
            onChange={update}
          />
          <span>{filtro.pages}</span>
        </div>
        <div>
          <label htmlFor={category}>Categoria</label>
          <select name='category' id={category} onChange={updateCategory}>
            <option value='all'>Todos</option>
            <option value='Fantasía'>Fantasia</option>
            <option value='Zombies'>Zombies</option>
          </select>
        </div>
      </div>
    </>
  )
}
