import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../container/Layout'

const ProductLayout = ({ children }) => {
  const router = useRouter()
  return (
    <Layout>
      <div className="container">
        <div className="row g-3 flex-column justify-content-center align-item-center mb-5">
          <h2 className="title text-center">Products</h2>
          <div className="underline-customize" />
          <nav
            id="subtitle"
            className="navbar navbar-expand-lg navbar-light shadow-sm"
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center align-item-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0" id="products-route">
                <li className="nav-item ms-5 me-5">
                  <Link href="/Products/wristwatch" className="nav-link">
                    <a
                      className={
                        router.asPath === '/Products/wristwatch' ||
                        router.asPath === '/product'
                          ? 'router-link-active'
                          : ''
                      }
                    >
                      Wrist Watch
                    </a>
                  </Link>
                </li>
                <li className="nav-item ms-5 me-5">
                  <Link href="/Products/wallclock" className="nav-link">
                    <a
                      className={
                        router.asPath === '/Products/wallclock'
                          ? 'router-link-active'
                          : ''
                      }
                    >
                      Wall Clock
                    </a>
                  </Link>
                </li>
                <li className="nav-item ms-5 me-5">
                  <Link href="/Products/standingclock" className="nav-link">
                    <a
                      className={
                        router.asPath === '/Products/standingclock'
                          ? 'router-link-active'
                          : ''
                      }
                    >
                      Standing Clock
                    </a>
                  </Link>
                </li>
                <li className="nav-item ms-5 me-5">
                  <Link href="/Products/desktopclock" className="nav-link">
                    <a
                      className={
                        router.asPath === '/Products/desktopclock'
                          ? 'router-link-active'
                          : ''
                      }
                    >
                      Desktop Clock
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {children}
          <a href="" className="btn btn-outline-success btn-width">
            See All Products
          </a>
        </div>
      </div>
    </Layout>
  )
}
ProductLayout.propTypes = {
  children: PropTypes.object,
}
export default ProductLayout
