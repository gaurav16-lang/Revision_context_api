import { useContext } from 'react'

import { CartContext } from '../contexts/CartContext'

export const Body = () => {
  const { handleUpdate } = useContext(CartContext)

  return (
    <>
      <h1>Body</h1>
      <button onClick={() => handleUpdate(1)}>Add to Cart</button>
    </>
  )
}
