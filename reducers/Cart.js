const CartReducer = (state, action) => {
  let newCarts = state.carts
  switch (action.type) {
    case 'ADD_TO_CART':
      newCarts = [...newCarts, action.id]
      localStorage.setItem('carts', JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
      }
    case 'REMOVE_FROM_CART':
      newCarts.forEach((value, index, array) => {
        if (value === action.id) {
          array.splice(index, 1)
          newCarts = array
        }
      })
      localStorage.setItem('carts', JSON.stringify(newCarts))
      return {
        ...state,
        carts: newCarts,
      }
    default:
      break
  }
}

export default CartReducer
