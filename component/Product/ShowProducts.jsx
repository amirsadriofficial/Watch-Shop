import React, { useContext } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { MdShoppingCart, MdRemoveShoppingCart } from 'react-icons/md'
import CartContext from '../../context/CartContext'

const ShowProducts = ({ data }) => {
  const { carts, dispatchCart } = useContext(CartContext)
  const handleAdd = (productID) => {
    if (carts.includes(productID)) {
      dispatchCart({
        type: 'REMOVE_FROM_CART',
        id: productID,
      })
    } else {
      dispatchCart({
        type: 'ADD_TO_CART',
        id: productID,
      })
    }
  }

  return (
    <div id="ShowProducta">
      {data.map((Product, key) => (
        <div key={key} className="card shadow-sm">
          <Image
            src={Product.image}
            alt=""
            layout="intrinsic"
            className="card-img-top"
          />
          <div className="card-body justify-content-center">
            <h5 className="card-title">{Product.name}</h5>
            <p className="card-text text-center">{Product.description}</p>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <button
              type="button"
              onClick={() => handleAdd(Product.id)}
              className="btn btn-outline-primary btn-sm d-flex justify-content-between align-items-center"
            >
              {carts.includes(Product.id) ? (
                <>
                  <MdRemoveShoppingCart />
                  Remove From Cart
                </>
              ) : (
                <>
                  <MdShoppingCart />
                  Add To Cart
                </>
              )}
            </button>
            <span>${Product.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
ShowProducts.propTypes = {
  Product: PropTypes.array,
  data: PropTypes.array,
}
export default ShowProducts
