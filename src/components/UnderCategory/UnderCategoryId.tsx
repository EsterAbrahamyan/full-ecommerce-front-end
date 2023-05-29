import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
// import { selectAllunderCategories } from '../../Slices/underCategorySlice'
import { AppDispatch } from '../../app/store'
import { fetchunderCategory, selectAllunderCategories } from '../../Slices/underCategorySlice'
import {Link} from 'react-router-dom'
 
const UnderCategoryId: React.FC = () =>{
  const data = useSelector(selectAllunderCategories)
  const dispatch:AppDispatch = useDispatch()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchunderCategory())
  }, [])
  
const undercategory = data.find((under) => under.category_id === Number(id));
const names = undercategory?.Products.map((prod) =>prod.name) || [];
  //   return (

  // console.log(names, "kkkkkkkkkkkkkkkkkkk")

  return(
    <div>
      {names.map((prod, index)=>(
        <Link to={`/${id}/product`} key={index}>
          <div>{prod}</div>
        </Link>
      ))}
    </div>
    )
}

export default UnderCategoryId

