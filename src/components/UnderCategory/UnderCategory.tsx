// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch } from '../../app/store';
// import { fetchunderCategory, selectAllunderCategories } from '../../Slices/underCategorySlice';
// import {Link} from 'react-router-dom'



// interface underCategoryPage {
//     id:number;
//     name: string;
//     category_id: number;
    
// }

// const underCategoryPage: React.FC = () => {
//     const undercategories = useSelector(selectAllunderCategories);
//     const dispatch: AppDispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchunderCategory());
//       }, []);
//       console.log(undercategories)

//       return (
//         <div>
//           {undercategories?.map((underCategory) => (
//             <Link to= {`/underCategory/${underCategory.id}`}  key={underCategory.id}>
//                 <div>{underCategory.name}</div>
              
    
              
//             </Link>
//           ))}
//         </div>
//       );
//     };
    
    
    
//     export default underCategoryPage;