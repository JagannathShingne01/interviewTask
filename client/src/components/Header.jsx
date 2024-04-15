import { useEffect } from "react";
import { useState } from "react"
import { Link} from "react-router-dom"
import axiosInstance from "../helper/axiosInstance";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  const [noOfOrders , setNoOfOrders] = useState(0)
  async function counter() {
    const response = await axiosInstance.get("/product/all");
    let data = response.data 
    let count = data?.length;
    setNoOfOrders(count); 
  }

  useEffect(() => {
    counter();
  }, []);
  return (
    <header className="bg-black-800 text-white flex items-center justify-around p-4 bg-black shadow-xl">
    <h1 className="text-xl font-bold ">Shopping Page</h1>
    <div className="flex bg-black ">
     <Link to="/checkout" className='bg-black/100 hover:bg-white text-white hover:text-black font-bold py-2 px-4 '> Watch List </Link>

      <section className="ml-4 bg-black-400 hover:bg-black-600 text-white font-bold py-2 px-4 rounded flex"> <FaCartShopping className="mt-1 mr-2 text-2xl md:text-xl "/>{noOfOrders} </section>
    </div>
  </header>
  )
}
          