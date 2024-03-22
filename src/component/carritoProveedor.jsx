import { createContext } from 'react'
import { useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const agregar = producto => {
    setCart(previus => [
      ...previus,
      {
        ...producto,
      },
    ])
  }

  const eliminar = producto => {
    setCart(
      cart.filter(value => {
        return value.book.ISBN !== producto.book.ISBN
      })
    )
  }

  return (
    <CartContext.Provider value={{ cart, setCart, agregar, eliminar }}>
      {children}
    </CartContext.Provider>
  )
}
