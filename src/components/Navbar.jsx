import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { Body } from './Body'

export const Navbar = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <h1>Navbar theme is {theme}</h1>
      <Body />
    </>
  )
}
