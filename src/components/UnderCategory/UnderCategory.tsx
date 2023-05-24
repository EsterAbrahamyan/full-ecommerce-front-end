import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { fetchunderCategory, selectAllunderCategories } from '../../feachers/underCategorySlice';



interface underCategoryPage {
    id:number;
    name: string;
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
            <div key={undercategory.id}>
                <div>{undercategory.name}</div>
              
    
              
            </div>
          ))}
        </div>
      );
    };
    
    
    
    export default underCategoryPage;