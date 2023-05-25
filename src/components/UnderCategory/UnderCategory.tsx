import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { fetchunderCategory, selectAllunderCategories } from '../../Slices/underCategorySlice';
import {Link} from 'react-router-dom'



interface underCategoryPage {
    id:number;
    name: string;
    category_id: number
}

const underCategoryPage: React.FC = () => {
    const undercategories = useSelector(selectAllunderCategories);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchunderCategory());
      }, []);
      console.log(undercategories)

      return (
        <div>
          {undercategories?.map((undercategory) => (
            <Link to= {`/undercategory/${undercategory.id}`}  key={undercategory.id}>
                <div>{undercategory.name}</div>
              
    
              
            </Link>
          ))}
        </div>
      );
    };
    
    
    
    export default underCategoryPage;