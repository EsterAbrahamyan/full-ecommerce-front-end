import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
// import { selectAllunderCategories } from '../../Slices/underCategorySlice'
import { AppDispatch } from '../../app/store'
import { fetchunderCategoryId, selectAllunderCategories } from '../../Slices/underCategorySlice'
import {Link} from 'react-router-dom'
import './UnderCategoryId.css'
import { Container, Row, Col, Image } from 'react-bootstrap';

 
const UnderCategoryId: React.FC = () =>{
  const data = useSelector(selectAllunderCategories)
  const dispatch:AppDispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    if (id) {
      dispatch(fetchunderCategoryId(parseInt(id)));
    }
  }, [dispatch, id]);
  
// const undercategory = data.find((under) => under.id === Number(id));
// const names = undercategory?.Products || [];
  //   return (
    const name = data.flatMap(underCategory => underCategory.Products)

  // console.log(names, "kkkkkkkkkkkkkkkkkkk")
  // console.log(undercategory,"hij")

  return (
    <Container fluid className="under-category-container">
      <Row>
        {name.map((products, index) => (
          <Col sm={3} key={index} className="under-category-item">
            <Link to={`/underCategory/${id}/product/${products.id}`}>
              <div className="product-box">
                <Image src={products.image} alt={products.name} fluid className="product-image" />
                <div className="product-name">{products.name}</div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
  
  
  
  
}

export default UnderCategoryId