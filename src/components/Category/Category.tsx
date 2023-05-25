import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { fetchCategory, selectAllCategories } from '../../Slices/categorySlice';
import {Link} from 'react-router-dom'



interface CategoryPage {
    id:number;
    name: string;
}

const CategoryPage: React.FC = () => {
    const categories = useSelector(selectAllCategories);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategory());
      }, []);
      console.log(categories)

      return (
        <div>
          {categories?.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
                <div>{category.name}</div>
              
    
              
            </Link>
          ))}
        </div>
      );
    };
    
    
    
    export default CategoryPage;
