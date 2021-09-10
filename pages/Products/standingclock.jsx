import React from 'react'
import ShowProducts from '../../component/Product/ShowProducts'
import STANDINGCLOCK_PRODUCTS from '../../utils/standingclock-products'
import ProductLayout from '../../component/Product/ProductLayout'

const SHOW_STANDINGCLOCK_PRODUCTS = () => {
  return (
    <ProductLayout>
      <ShowProducts data={STANDINGCLOCK_PRODUCTS} />
    </ProductLayout>
  )
}
export default SHOW_STANDINGCLOCK_PRODUCTS
