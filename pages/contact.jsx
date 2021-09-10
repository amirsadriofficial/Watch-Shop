import React from 'react'
import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'
import Layout from '../container/Layout'

const Contact = () => {
  return (
    <Layout>
      <div className="container my-5">
        <h2 className="text-center">Contact us</h2>
        <div className="underline-customize" />
        <div className="text-center strong-text">
          <strong>Email: info@xxxxxxx.com</strong>
          <br className="my-2" />
          <strong>Contact Number: 00000000 - 00000000000</strong>
        </div>
        <h2 className="text-center mt-5">Follow us on social media</h2>
        <div className="underline-pro" />
        <div id="social-media">
          <a href="#">
            <FaInstagram size={50} />
            <h5 className="py-3">Instagram</h5>
          </a>
          <a href="#">
            <FaTelegramPlane size={50} />
            <h5 className="py-3">Telegram</h5>
          </a>
          <a href="#">
            <FaFacebookF size={50} />
            <h5 className="py-3">facebook</h5>
          </a>
          <a href="#">
            <FaTwitter size={50} />
            <h5 className="py-3">Twitter</h5>
          </a>
          <a href="#">
            <FaLinkedinIn size={50} />
            <h5 className="py-3">Linkedin</h5>
          </a>
        </div>
        <h2 className="text-center mt-4">Central office</h2>
        <div className="underline" />
        <address className="text-center">
          Address: No. 00 - Street Name St. - City Name - Province Name Province
        </address>
      </div>
    </Layout>
  )
}
export default Contact
