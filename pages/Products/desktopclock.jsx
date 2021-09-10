import React from 'react'
import ShowProducts from '../../component/Product/ShowProducts'
import DESKTOPCLOCK_PRODUCTS from '../../utils/desktopclock-products'
import ProductLayout from '../../component/Product/ProductLayout'

const SHOW_DESKTOPCLOCK_PRODUCTS = () => {
  return (
    <ProductLayout>
      <ShowProducts data={DESKTOPCLOCK_PRODUCTS} />
    </ProductLayout>
  )
}
export default SHOW_DESKTOPCLOCK_PRODUCTS
