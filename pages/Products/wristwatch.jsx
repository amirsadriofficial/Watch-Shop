import React from 'react'
import ShowProducts from '../../component/Product/ShowProducts'
import WRISTWATCH_PRODUCTS from '../../utils/wristwatch-products'
import ProductLayout from '../../component/Product/ProductLayout'

const SHOW_WRISTWATCH_PRODUCTS = () => {
  return (
    <ProductLayout>
      <ShowProducts data={WRISTWATCH_PRODUCTS} />
    </ProductLayout>
  )
}
export default SHOW_WRISTWATCH_PRODUCTS
