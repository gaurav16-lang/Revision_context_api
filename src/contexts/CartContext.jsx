import { createContext } from 'react'
import { useState } from 'react'
// Basicaly help me to create that box

export const CartContext = createContext() //type of context

export const CartContextProvider = ({ children }) => {
  // we can't murtate thing from context
  // but we can pass the state or store value and function here and use it app and children of app componnnets
  //this will give me the value

  const [cart, setCart] = useState(10)

  const handleUpdate = (value) => {
    setCart(value + cart)
  }

  return (
    <CartContext.Provider value={{ cart, handleUpdate }}>
      {children}
    </CartContext.Provider>
  )
}
