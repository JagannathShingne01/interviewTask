import Product from "../model/ProductSchema.js"


const addProduct = async (req, res) => {
    const { title, thumbnail , price } = req.body;
   
    if (!title || !thumbnail) {
      console.log("Name and description are required"); 
    }
  
 
  
    try {
      await Product.create(req.body);
      return res.status(201).send("New product created successfully"); 
    } catch (error) {
      console.error("Error creating product:", error);
      return res.status(500).send("Internal server error"); 
    }
  };
 
  const getProduct = async (req, res) => {
    const products = await Product.find({});
    console.log(products)
  
    return res.status(200).send(products);
  };
  

  export {addProduct, getProduct};