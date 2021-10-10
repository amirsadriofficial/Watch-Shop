import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdShoppingCart } from 'react-icons/md'
import Layout from '../container/Layout'
import DESKTOPCLOCK_PRODUCTS from '../utils/desktopclock-products'
import STANDINGCLOCK_PRODUCTS from '../utils/standingclock-products'
import WALLCLOCK_PRODUCTS from '../utils/wallclock-products'
import WRISTWATCH_PRODUCTS from '../utils/wristwatch-products'

const Cart = () => {
  const [state, setState] = useState({ isloaded: false, currentProducts: [] })
  const ProductsData = [
    ...DESKTOPCLOCK_PRODUCTS,
    ...STANDINGCLOCK_PRODUCTS,
    ...WALLCLOCK_PRODUCTS,
    ...WRISTWATCH_PRODUCTS,
  ]

  useEffect(() => {
    const SelectedProductsID = JSON.parse(localStorage.getItem('carts'))
    if (Array.isArray(SelectedProductsID) && SelectedProductsID.length > 0) {
      const total = 0
      const SelectedProducts = []
      SelectedProductsID.filter((id) =>
        ProductsData.filter((obj) =>
          obj.id === id
            ? SelectedProducts.push({ ...obj, ...{ quantity: 1 } })
            : null
        )
      )
      setState({ ...state, isloaded: true, currentProducts: SelectedProducts })
    } else {
      setState({ ...state, isloaded: true })
    }
  }, [])

  const onHandleQuantity = (item, action) => {
    const s = state.currentProducts
    const i = item
    switch (action) {
      case 'increase':
        i.quantity += 1
        break
      case 'decrease':
        i.quantity -= 1
        break
      default:
        break
    }
    s.filter((obj) =>
      obj.id === i.id ? Object.assign(obj, { quantity: i.quantity }) : null
    )
    setState({ ...state, currentProducts: s })
  }

  if (!state.isloaded) {
    return <h1>Loading</h1>
  }

  const { currentProducts } = state

  let total = 0

  currentProducts.filter((obj) => (total += obj.quantity * obj.price))

  return (
    <Layout>
      <div className="container">
        <div className="row mt-5">
          {currentProducts == 0 ? (
            <div className="col-md-12 text-center mb-5">
              <MdShoppingCart size={100} />
              <h3 className="text-bold">Cart Is Empty</h3>
              <Link href="/product" className="btn btn-outline-success mt-3">
                <a className="btn btn-outline-success mt-3">Products</a>
              </Link>
            </div>
          ) : (
            <div className="col-lg-12 pl-3 pt-3">
              <table className="table table-hover border bg-white">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th style={{ width: '10%' }}>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {currentProducts.length > 0 ? (
                  currentProducts.map((item, key) => (
                    <tbody key={key}>
                      <tr vFor="item in cartItems" key="item.id">
                        <td className="align-middle">
                          <div className="row">
                            <div className="col-lg-2">
                              <Image
                                src={item.image.src}
                                width={item.image.width}
                                height={item.image.height}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-lg-10">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">${item.price}</td>
                        <td className="align-middle">
                          <button
                            type="button"
                            onClick={() => onHandleQuantity(item, 'increase')}
                            className="btn btn-sm btn-primary me-2"
                          >
                            +
                          </button>
                          <span>{item.quantity}</span>
                          {item.quantity > 1 ? (
                            <button
                              type="button"
                              onClick={() => onHandleQuantity(item, 'decrease')}
                              className="btn btn-sm btn-primary ms-2"
                            >
                              -
                            </button>
                          ) : null}
                        </td>
                        <td className="align-middle">
                          ${item.price * item.quantity}
                        </td>
                        <td className="align-middle" style={{ width: '15%' }}>
                          <button
                            type="button"
                            onClick={() => {
                              const d = JSON.parse(
                                localStorage.getItem('carts')
                              )
                              if (d && d.includes(item.id)) {
                                d.splice(d.indexOf(item.id), 1)
                                localStorage.setItem('carts', JSON.stringify(d))
                                window.location.replace('/cart')
                              }
                            }}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <tr>No products selected! Please Select once.</tr>
                )}
                <tfoot>
                  <tr>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          localStorage.removeItem('carts'),
                            window.location.replace('/cart')
                        }}
                        className="btn btn-dark"
                      >
                        Clear Cart
                      </button>
                    </td>
                    <td colSpan="2" className="hidden-xs" />
                    <td
                      className="hidden-xs text-center"
                      style={{ width: '15%' }}
                    >
                      <strong>Total : {total}</strong>
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
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Cart
