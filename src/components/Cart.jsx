import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const Cart = () => {
  const value = useContext(CartContext)
  return (
    <>
      <h1>Cart items {value.cart}</h1>
    </>
  )
}
