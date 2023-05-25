import {Routes, Route} from "react-router-dom"
import Home from  "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Category from "../components/Category/Category"
import UnderCategory from "../components/UnderCategory/UnderCategory"
import Products from "../components/Products/Products"
import CategoryId from "../components/Category/CategoryId"
import UnderCategoryId from "../components/UnderCategory/UnderCategoryId"
import ProductId from "../components/Products/ProductId"

function AppRoutes(){
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/category' element={<Category/>} />
                <Route path='/undercategory' element={<UnderCategory/>} />
                <Route path='/product' element={<Products/>} />
                <Route path='/category/:id' element={<CategoryId/>} />
                <Route path='/undercategory/:id' element={<UnderCategoryId/>} />
                <Route path='/product/:id' element={<ProductId/>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes