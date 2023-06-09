import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
// import { selectAllunderCategories } from '../../Slices/underCategorySlice'
import { AppDispatch } from '../../app/store'
import { fetchunderCategory, selectAllunderCategories } from '../../Slices/underCategorySlice'
import {Link} from 'react-router-dom'
// import './UnderCategoryId.css'
 
const UnderCategoryId: React.FC = () =>{
  const data = useSelector(selectAllunderCategories)
  const dispatch:AppDispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchunderCategory())
  }, [])
  
const undercategory = data.find((under) => under.id === Number(id));
const names = undercategory?.Products || [];
  //   return (

  console.log(names, "kkkkkkkkkkkkkkkkkkk")
  console.log(undercategory,"hij")

  return(
    <div>
      {names.map((products, index)=>(
        <Link to={`/underCategory/${id}/product/${products.id}`} key={index}>
        <div>{products.name}</div>
        <img src={`${products?.image}`} alt={products.name} />
      </Link>
      ))}
    </div>
    )
}

export default UnderCategoryId