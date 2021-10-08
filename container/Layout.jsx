import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import CartContext from '../context/CartContext'
import CartReducer from '../reducers/Cart'

const Layout = ({ children }) => {
<<<<<<< HEAD
  const carts = typeof window !== 'undefined' && localStorage.getItem('carts') ?
    JSON.parse(localStorage.getItem('carts')) : []
=======
  // const carts = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carts')) : null
>>>>>>> e206373b0345a4a7f321caf9ce4e006b31ff1a27
  const [state, dispatch] = useReducer(CartReducer, { carts: carts })

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
