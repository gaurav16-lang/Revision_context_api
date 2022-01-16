import { Children, createContext } from 'react'

// Basicaly help me to create that box

export const CartContext = createContext() //type of context

export const CartContextProvider = ({ children }) => {
  //this will give me the value
  return <CartContext.Provider value={10}>{children}</CartContext.Provider>
}
