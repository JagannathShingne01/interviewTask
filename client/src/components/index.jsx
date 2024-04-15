import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around bg-black text-white h-10 text-xl items-center '>
          <div>
         <Link to={"/"}>Product</Link>
          </div>
          <div>
            <Link to={"/cart"}>Cart</Link>
          </div>
        </div>
        <Product/>
    </div>
  )
}

export default Navbar