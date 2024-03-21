import { useContext } from 'react'
import { Libros } from './libro'
import { CartContext } from './carritoProveedor'
export function Estanteria({ producto }) {
  const { cart, setCart } = useContext(CartContext)

  const handleClick = () => {
    setCart()
  }
  return (
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
  )
}
