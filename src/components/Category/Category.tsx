import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { fetchCategory, selectAllCategories } from '../../Slices/categorySlice';
import { Link } from 'react-router-dom';
import './Category.css';

interface Category {
  id: number;
  name: string;
  image: string;
}

const Category: React.FC = () => {
  const categories = useSelector(selectAllCategories);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    const div = document.createElement('div');
    div.setAttribute('class', 'gallerymodel');
    const galleryScn = document.querySelector('.gallery2-scn');
    const galleryModel = document.querySelector('.gallerymodel');
    if (galleryScn && galleryModel) {
      galleryScn.appendChild(div);
      galleryModel.innerHTML = '🗙';
    }

    return () => {
     
    };
  }, []);

  return (
    
      <section className="gallery2-scn">
        <div className="page-width">
          <h2>Our Delicacies</h2>
          <div className="gallery-list">
            {categories?.map((category) => (
              <Link className="category-link" to={`/category/${category.id}`} key={category.id}>
                <div className="gallery-item" data-gallery={`gallery-${category.id}`}>
                  <img src={`${category?.image}`} alt={category.name} />
                  <div className="gallery-cont">{category.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    
  );

 

};

export default Category;
