import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MdShoppingCart } from 'react-icons/md'
import CartContext from '../context/CartContext'

const Header = () => {
  const router = useRouter()
  const { carts } = useContext(CartContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-layout shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Watch Shop
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-5">
              <Link href="/" className="nav-link">
                <a
                  className={router.asPath === '/' ? 'router-link-active' : ''}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link href="/product" className="nav-link">
                <a
                  className={
                    router.asPath === '/product' ||
                    router.asPath === '/Products/wristwatch' ||
                    router.asPath === '/Products/wallclock' ||
                    router.asPath === '/Products/standingclock' ||
                    router.asPath === '/Products/desktopclock'
                      ? 'router-link-active'
                      : ''
                  }
                >
                  Products
                </a>
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link href="/contact" className="nav-link">
                <a
                  className={
                    router.asPath === '/contact' ? 'router-link-active' : ''
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item me-3">
              <Link href="/cart" className="nav-link">
                <a>
                  <span className="badge rounded-pill bg-success me-1">
                    {carts.length}
                  </span>
                  <MdShoppingCart size={40} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
