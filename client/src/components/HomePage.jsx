import { useEffect, useState } from "react";
import Header from "./Header";
import  axiosInstance from '../helper/axiosInstance'
import { FaCartShopping } from "react-icons/fa6";
import { Circles } from 'react-loader-spinner'
export default function Loader() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {

      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10`
      );
      let result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData)=>[...prevData,...result.products]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }
  async  function handleData(data){
    
    alert("Added to warch List!!");

    const response = await axiosInstance.post('/product/add',data);

  }
  const ProductCard = ({title, thumbnail,  description , price} ) => {
    return (
      <div className="max-w-sm bg-slate-200 rounded shadow-md overflow-hidden mx-4">
        <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
        <div className="p-4">
          <h5 className="text-xl font-bold tracking-tight text-black-900">{title}</h5>
          <p className="mt-2 text-black text-sm truncate">{description}</p>
          <p className="mt-2 text-gray text-sm">Rs{price}</p>
  
          <div className="mt-4 flex items-center justify-between">
            <button onClick={() => {handleData({title , thumbnail, price})}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-black hover:bg-black/80 rounded hover:bg-black-800 focus:ring-4 w-full  focus:ring-black-500 ">
              <span className="text-center flex justify-center items-center mx-auto">Add to Cart  <FaCartShopping className="mx-2"/></span>

            </button>
          </div>
        </div>
      </div>
    );
  };
  const randomKey = Math.floor((Math.random() * 100) + 1);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center mt-10">
              <Circles
          height="400"
          width="400"
          color="#000000"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          style={{display: "flex"}}
         
  />
    </div>;
  }

  return (
    <div>
    <Header/>
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
          <ProductCard key={randomKey} {...product} />
        ))}
      </div>
    </div>
    </div>
  );
}
