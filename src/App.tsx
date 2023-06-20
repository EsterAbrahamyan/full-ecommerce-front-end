import {Routes, Route} from "react-router-dom"
// import Footer from "./Layouts/Footer/Footer"
import Header from "./Layouts/Header/Header"
import Home from "./Pages/Home/Home"
import Product from "./components/Products/ProductId"
import CategoryId from "./components/Category/CategoryId"
import UnderCategoryId from "./components/UnderCategory/UnderCategoryId"
// import Products from "../components/Products/Products"
import ProductId from "./components/Products/ProductId"
import Login from "./Pages/Login/Login"
import RegisterPage from "./Pages/Register/Register"
import './App.css'
// import Footer from "./Layouts/Footer/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from "./components/Cart/ShoppingCart"
import UserPage from "./Pages/UserPage/UserPage"




function AppRoutes(){
    return (
      <div className="App">
        <Header />
        <div className="content-container"></div>
        <Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/' element={<Home/>} />
                <Route path='undercategory/:id/product/:id' element={<ProductId/>} />
                <Route path='/category/:id' element={<CategoryId/>} />
                <Route path='/undercategory/:id' element={<UnderCategoryId/>} />
                <Route path='/product/:id' element={<ProductId/>} />
                <Route path='/shoppingcart/:id' element={<ShoppingCart/>} />
                <Route path="/user" element={<UserPage/>} />
              </Routes>
        
        </div>
        
    )
}

export default AppRoutes
