import express from "express";
import connectionToDb from "./database/DbConnection.js";
import product from "./routes/product.routes.js"
// import signup from "./routes/signup.routes.js"
import cors from 'cors'

// Database connection setup 
(async () => {
  await connectionToDb();
})();

// Port for listing the app
const port = 3000;

// expess imported to understand json format
const app = express();
app.use(express.json());


// cors for cros origin access
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))


// routes ->
app.use("/product",product );

// app.use("/login",signup );


// if routes not found
app.all("*", (req, res, next) => {
  console.log(`Can't find ${req.originalUrl} on the server!`);
});

(async () => {
  await app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
})();
