import '../estilos/buscador.css'
import { useLibrary } from '../hooks/useLibrary'
import { Menu } from './menu'
import { Estanteria } from './estante'
import { Carrito } from './carrito'
import { CartProvider } from './carritoProveedor'

export function Buscador() {
  const { setFilters, filters, producto } = useLibrary()

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
      <CartProvider>
        <Estanteria producto={producto} update={handleClick} />
        <Carrito />
      </CartProvider>
    </section>
  )
}
