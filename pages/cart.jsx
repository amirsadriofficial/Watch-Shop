import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdShoppingCart } from 'react-icons/md'
import Layout from '../container/Layout'

const Cart = () => {
  return (
    <Layout>
      <div>Cart</div>
      <div className="container">
        <div className="row mt-5">
          <div vIf="cartItems.length == 0" className="col-md-12 text-center">
            <MdShoppingCart />
            <h3 className="text-bold">Cart Is Empty</h3>
            <Link href="/product" className="btn btn-outline-success mt-3">
              <a>Products</a>
            </Link>
          </div>
          <div vElse className="col-lg-12 pl-3 pt-3">
            <table className="table table-hover border bg-white">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th style="width: 10%">Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr vFor="item in cartItems" key="item.id">
                  <td className="align-middle">
                    <div className="row">
                      <div className="col-lg-2">
                        <Image
                          src={Product.image}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-10">
                        <h5>{Product.name}</h5>
                        <p>{Product.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">${Product.price}</td>
                  <td className="align-middle">
                    <button
                      type="button"
                      onClick="increment(Product.id)"
                      className="btn btn-sm btn-primary me-2"
                    >
                      +
                    </button>
                    <span>{Product.quantity}</span>
                    <button
                      type="button"
                      onClick="decrement(Product.id)"
                      className="btn btn-sm btn-primary ms-2"
                    >
                      -
                    </button>
                  </td>
                  <td className="align-middle">
                    ${Product.price * Product.quantity}
                  </td>
                  <td className="align-middle" style="width: 15%">
                    <button
                      type="button"
                      onClick="removeFromCart(Product.id)"
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <button
                      type="button"
                      click="clearCart"
                      className="btn btn-dark"
                    >
                      Clear Cart
                    </button>
                  </td>
                  <td colSpan="2" className="hidden-xs" />
                  <td className="hidden-xs text-center" style="width: 15%">
                    <strong>Total : ${cartTotalAmount}</strong>
                  </td>
                  <td>
                    <a href="#" className="btn btn-success btn-block">
                      Checkout
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Cart
