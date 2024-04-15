import { useEffect, useState } from "react";
import axiosInstance from "../helper/axiosInstance";
import { Circles } from "react-loader-spinner";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ title, thumbnail, price }) => {
  const [value, setValue] = useState(price);
  

  
  value;
  const navigate = useNavigate();
  
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />
      <div className="p-4">
        <h5 className="text-xl font-bold tracking-tight text-black-900">
          {title}
        </h5>
        <h5 className="text-xl font-bold tracking-tight text-black-900">
          {value}
        </h5>

        
      </div>
    </div>
  );
};

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        const response = await axiosInstance.get("/product/all");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsList();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* <div><IoMdArrowRoundBack className="text-2xl" onClick={()=>navigate(-1)}/></div> */}
      <Link className="text-3xl font-bold text-center mb-8 flex mx-4 md:mx-5" to={"/"}><IoMdArrowRoundBack className="mx-2 mt-1"/> Your Cart <FaCartShopping className="mx-2 mt-1"/>  </Link>
      {products?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-black mx-2 md:mx-6">
          {products.map((product) => (
            <ProductCard
              key={product?.name}
              title={product?.title}
              thumbnail={product?.thumbnail}
              price={product?.price}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10- "><Circles
        height="200"
        width="200"
        color="#000000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        
        /></div>
      )}

     
    </div>
  );
}
