const showProductsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        added: true,
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        added: false,
      }
    default:
      break
  }
}
export default showProductsReducer
