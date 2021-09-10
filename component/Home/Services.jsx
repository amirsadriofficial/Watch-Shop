import React from 'react'
import Image from 'next/image'
import wristwatch from '../../public/image/Product Types/wristwatch.webp'
import wallclock from '../../public/image/Product Types/wallclock.jpg'
import standingclock from '../../public/image/Product Types/standingclock.jpg'
import desktopclock from '../../public/image/Product Types/desktopclock.jpg'

const Services = () => {
  return (
    <section id="services" className="container my-5">
      <div className="p-2">
        <h2 className="text-center">Product Types</h2>
        <div className="underline" />
        <div className="items py-1">
          <div className="product-types">
            <Image src={wristwatch} alt="Wrist Watch Type" />
            <h4>Wrist Watch Type</h4>
          </div>
          <div className="product-types">
            <Image src={wallclock} alt="Wall Clock Type" />
            <h4>Wall Clock Type</h4>
          </div>
          <div className="product-types">
            <Image src={standingclock} alt="Standing Clock Type" />
            <h4>Standing Clock Type</h4>
          </div>
          <div className="product-types">
            <Image src={desktopclock} alt="Desktop Clock Type" />
            <h4>Desktop Clock Type</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services
