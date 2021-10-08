import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import CartContext from '../context/CartContext'
import CartReducer from '../reducers/Cart'

const Layout = ({ children }) => {
  const carts =
    typeof window !== 'undefined' && localStorage.getItem('carts')
      ? JSON.parse(localStorage.getItem('carts'))
      : []
  const [state, dispatch] = useReducer(CartReducer, { carts })

  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        dispatchCart: dispatch,
      }}
    >
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  )
}
Layout.propTypes = {
  children: PropTypes.array,
}
export default Layout
