import { createContext, useReducer } from 'react'
import { useState } from 'react'

export const CartContext = createContext()

const initial = []
const reducer = (state, action) => {
  const { actiontype, actionpayload } = action

  switch (actiontype) {
    case 'Add to lecture': {
      return [...state, actionpayload]
      break
    }
    case 'Remove from cart': {
      return state.filter(value => {
        return actionpayload.book.ISBN !== value.book.ISBN
      })
      break
    }
    case 'Remove All items': {
      return initial
      break
    }
  }

  return state
}
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)
  const agregar = producto =>
    dispatch({
      actiontype: 'Add to lecture',
      actionpayload: producto,
    })

  const eliminar = producto =>
    dispatch({
      actiontype: 'Remove from cart',
      actionpayload: producto,
    })

  const vaciar = () =>
    dispatch({
      actiontype: 'Remove All items',
    })

  return (
    <CartContext.Provider value={{ agregar, eliminar, vaciar, cart: state }}>
      {children}
    </CartContext.Provider>
  )
}
