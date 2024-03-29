import { useContext, useId } from 'react'
import { CartContext } from './carritoProveedor'
export function Carrito() {
  const { cart, vaciar, eliminar } = useContext(CartContext)
  const carritoId = useId()

  return (
    <div className='carrito__container'>
      <label htmlFor={carritoId}>
        <svg
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            fill-rule='evenodd'
            d='M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z'
            clip-rule='evenodd'
          />
        </svg>
      </label>
      <input type='checkbox' name='carrito' id={carritoId} hidden />
      <div className='carrito'>
        <button className='remove__cart' onClick={vaciar}>
          Clear
        </button>
        {cart &&
          cart.map(value => {
            return (
              <div key={value.book.ISBN}>
                <img src={value.book.cover} alt={value.book.title} />
                <button
                  className='exit__button'
                  onClick={() => eliminar(value)}
                >
                  X
                </button>
              </div>
            )
          })}
      </div>
    </div>
  )
}
