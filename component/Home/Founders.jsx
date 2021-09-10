import React from 'react'
import Image from 'next/image'
import womanFounder from '../../public/image/Founders/woman.jpg'
import manFounder from '../../public/image/Founders/man.png'

const Founders = () => {
  return (
    <div id="founders" className="my-5">
      <div className="jumbotron container">
        <div className="col-12 text-center">
          <h2 className="title">Founders</h2>
          <div className="underline" />
        </div>
        <div className="row m-0">
          <div className="row col-6">
            <div className="col-4">
              <Image src={womanFounder} alt="Picture of the Founder" />
            </div>
            <div className="col-8">
              <blockquote>
                <p className="text-color">
                  Lorem ipsum dolor sit amet, duo te graeci apeirian, at has
                  albucius salutatus referrentur. Nusquam mandamus te qui. Ex
                  his aliquam percipit, corrumpit elaboraret id vel, iuvaret
                  adipisci ius id. Brute oblique salutatus cu mea, eum vero
                  mundi numquam ex.
                </p>
                <hr className="founders-hr" />
                <cite>
                  <strong>Founder Name : </strong>Lorem ipsum
                </cite>
              </blockquote>
            </div>
          </div>
          <div className="row col-6 ms-4">
            <div className="col-4">
              <Image src={manFounder} alt="Picture of the Founder" />
            </div>
            <div className="col-8">
              <blockquote>
                <p className="text-color">
                  Lorem ipsum dolor sit amet, duo te graeci apeirian, at has
                  albucius salutatus referrentur. Nusquam mandamus te qui. Ex
                  his aliquam percipit, corrumpit elaboraret id vel, iuvaret
                  adipisci ius id. Brute oblique salutatus cu mea, eum vero
                  mundi numquam ex.
                </p>
                <hr className="founders-hr" />
                <cite>
                  <strong>Founder Name : </strong>Lorem ipsum
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Founders
