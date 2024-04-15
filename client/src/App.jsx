
import './App.css'
import HomePage from './components/HomePage'
import {Routes , Route, BrowserRouter} from "react-router-dom"
import ProductPage from './components/ProductPage.jsx'
function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} ></Route>
    <Route path="/checkout" element={<ProductPage />} ></Route>
     </Routes>
  </BrowserRouter>
  )
}

export default App
