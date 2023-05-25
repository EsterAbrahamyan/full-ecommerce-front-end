import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from "../../app/store";
import { fetchCategoryId, selectAllCategories } from '../../Slices/categorySlice';
// import { RootState } from "../../app/store";

const CategoryId: React.FC = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  
  

  useEffect(() => {
    if (id) {
      dispatch(fetchCategoryId(Number(id)));
    }
  }, [dispatch, id]);

  // if (!category) {
  //   return <div>Loading...</div>;
  // }

  const category = categories.find((category) => category.id === Number(id));

  return (
    <div>
      <div>{category?.name}</div>
    </div>
  );
}

export default CategoryId;
