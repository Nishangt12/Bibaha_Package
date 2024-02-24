import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
// import Pagination from '@mui/material/Pagination';

import './product.css';

const Products = ({ product }) => {
  const options = {
    edit: false,
    color: 'black',
    activeColor: 'orange',
    size: window.innerWidth < 600 ? 20 : 20,
    value: product.ratings,
    borderColor: '#000000',
    isHalf: true,
  };

  const defaultImage = 'https://via.placeholder.com/250x250';

  return (
    <>
      {/* // <Link className="productCard" to={`/product/${product._id}`}>
    //   {product.images && product.images.length > 0 ? (
    //     <img src={product.images[0].url} alt={product.name} />
    //   ) : (
    //     <img src={defaultImage} alt={product.name} />
    //   )}
    //   <p>{product.name}</p>
    //   <span>{`Rs. ${product.price}`}</span>
    //   <div>
    //     <ReactStars {...options} />{' '}
    //     <span>&nbsp;&nbsp; {product.numofReviews} Reviews</span>
    //   </div>
    // </Link> */}

        <div className="product-grid">
            <div className="product-content">
                <h3 className="title"><Link to={`/product/${product._id}`} >{product.name}</Link></h3>
                <div className="price">{`Rs. ${product.price}`}</div>
                <ul className="rating">
                <ReactStars {...options} />{' '}
        <span>&nbsp;&nbsp; {product.numofReviews}</span>
                </ul>
                <ul class="product-links">
                    <li><Link href="#"><i class="fa fa-shopping-bag"></i></Link></li>
                   
                    <li><Link to={`/product/${product._id}`}><i class="fa fa-eye"></i></Link></li>
                </ul>
            </div>
            <div className="product-image">
               <Link><span className="image">
                {product.images && product.images.length > 0 ? (
        <img src={product.images[0].url} alt={product.name} />
      ) : (
        <img src={defaultImage} alt={product.name} />
      )}
                </span>
                </Link> 
                
            </div>
        </div>
  

    </>
  );
};

export default Products;
