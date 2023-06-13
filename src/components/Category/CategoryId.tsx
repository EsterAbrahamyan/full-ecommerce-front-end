import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from "../../app/store";
import { fetchCategoryId, selectAllCategories } from '../../Slices/categorySlice';
import './CategoryId.css';

const CategoryId: React.FC = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCategoryId(parseInt(id)));
    }
  }, [dispatch, id]);

  const names = categories.flatMap(category => category.underCategories);

  if (!names) {
    return <div>Loading...</div>;
  }
return (
  <div className="undercategory-list">
    {names.map((under, index) => (
      <Link to={`/undercategory/${under.id}`} key={index}>
        <div className="undercategory-name">
          <div>{under.name}</div>
        </div>
      </Link>
    ))}
  </div>
);
};

export default CategoryId;
