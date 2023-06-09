import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from "../../app/store";
import { fetchCategory, selectAllCategories } from '../../Slices/categorySlice';
// import { RootState } from "../../app/store";
// import { CategoryPage } from './Category'
import {Link} from 'react-router-dom'
import './CategoryId.css'




const CategoryId: React.FC = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const category = categories.find((category) => category.id === Number(id));
  const names = category?.underCategories.map((under) => ({
    id: under.id,
    name: under.name
  }));

  if (!category) {
    return <div>Loading...</div>;
  }

  // const categoryStyle = {
  //   backgroundImage: 'url("https://t4.ftcdn.net/jpg/03/17/21/27/360_F_317212789_QH4CjTqxRbHNA2RQICcKN5KICA38Zivq.jpg")',
  //   backgroundSize: "100% 100%",
  //   // // backgroundPosition: "center",
  //   // padding: "300px",
  //   // // height: "12vh",
  // };

  // const underCategoryStyle = {
  //   border: "1px solid black",
  //   margin: "10px",
  //   padding: "10px",
  // };

  return (
    <div className="undercategory-list">
  
      {names?.map((under, index) => (
        <Link to={`/underCategory/${under.id}`} key={index}>
          <div className="undercategory-name">
          <div className="undercategory-inner">{under.name}</div>
        </div>
        </Link>
      ))}
      
    </div>
  );
};

export default CategoryId;



