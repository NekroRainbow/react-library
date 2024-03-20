import { FilterContext } from '../component/filtros'
import { library } from '../mooks/books.json'
import { useContext } from 'react'

export function useLibrary() {
  const { filters, setFilters } = useContext(FilterContext)
  const filtrado = () => {
    return library.filter(value => {
      return (
        value.book.pages >= filters.pages &&
        (filters.category === 'all' || filters.category === value.book.genre)
      )
    })
  }
  return { setFilters, producto: filtrado(), filters }
}
