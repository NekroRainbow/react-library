import { CartContext } from '../component/carritoProveedor'
import { FilterContext } from '../component/filtros'
import { library } from '../mooks/books.json'
import { useContext } from 'react'

export function useLibrary() {
  const { filters, setFilters } = useContext(FilterContext)
  const { cart } = useContext(CartContext)
  const filtrado = () => {
    return library.filter(value => {
      return (
        value.book.pages >= filters.pages &&
        (filters.category === 'all' || filters.category === value.book.genre) &&
        cart.every(valor => {
          return valor.book.ISBN !== value.book.ISBN
        })
      )
    })
  }
  return { setFilters, producto: filtrado(), filters }
}
