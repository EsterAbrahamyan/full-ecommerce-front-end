import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from "../../app/store";
import { fetchCategory, selectAllCategories } from '../../Slices/categorySlice';
// import { RootState } from "../../app/store";
// import { CategoryPage } from './Category'
import {Link} from 'react-router-dom'




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

  return (
    <div>
      {names?.map((under, index) => (
        <Link to={`/underCategory/${under.id}/product`} key={index}>
          <div>{under.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryId;
