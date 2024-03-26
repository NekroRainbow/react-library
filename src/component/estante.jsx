import { useContext } from 'react'
import { Libros } from './libro'
import { CartContext } from './carritoProveedor'
export function Estanteria({ producto }) {
  const { agregar } = useContext(CartContext)

  return (
    <div className='estante'>
      <ul>
        {producto.map(value => {
          return (
            <li
              key={value.book.ISBN}
              onClick={() => {
                agregar(value)
              }}
            >
              <Libros poster={value.book.cover} title={value.book.title} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
