import React from 'react'
import ShowProducts from '../../component/Product/ShowProducts'
import WALLCLOCK_PRODUCTS from '../../utils/wallclock-products'
import ProductLayout from '../../component/Product/ProductLayout'

const SHOW_WALLCLOCK_PRODUCTS = () => {
  return (
    <ProductLayout>
      <ShowProducts data={WALLCLOCK_PRODUCTS} />
    </ProductLayout>
  )
}
export default SHOW_WALLCLOCK_PRODUCTS
