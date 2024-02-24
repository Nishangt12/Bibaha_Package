import React, { Fragment, useEffect, useState } from 'react';
import Productcard from '../../products/Productcard';
import { useParams,Link } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';
import axios from 'axios';
import "./search.css"

const SearchFilter = () => {
  const params = useParams();
  const keyword = params.search;
  const [productList, setProductList] = useState();
  const [price, setPrice] = useState([0, 2000]);
  const [category, setCategory] = useState('');
  const [ratings, setRatings] = useState(0);

  const priceHandler = (e, newPrice) => {
    e.preventDefault();

    setPrice(newPrice);
  };

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/products?keyword=${keyword}`
        );
        console.log(data.products);
        setProductList(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getSearch();
  }, [keyword]);

  return (
    // <Fragment>
    //   <div>
    //     <h2 className="productsHeading">Products</h2>
    //     <div className="filterBox">
    //       <h3>Price</h3>
    //       <Slider
    //         value={price}
    //         onChange={priceHandler}
    //         valueLabelDisplay="auto"
    //         aria-labelledby="range-slider"
    //         min={0}
    //         max={2000}
    //       />
    //       <h3>Categories</h3>
    //       <ul className="categoryfilter">
    //         {categories &&
    //           categories.map((category) => (
    //             <li
    //               className="category-li "
    //               key={category.title}
    //               onClick={() => setCategory(category)}
    //             >
    //               {category.title}
    //             </li>
    //           ))}
    //       </ul>

    //       <h3 component="legend">Ratings Above</h3>
    //       <Rating
    //         value={ratings}
    //         onChange={(e, newRating) => {
    //           setRatings(newRating);
    //         }}
    //         precision={0.5}
    //       />
    //     </div>
    //     <div
    //       style={{
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //         padding: '0 5vmax',
    //         justifyContent: 'center',
    //         minHeight: '30vh',
    //       }}
    //     >
    //       {productList &&
    //         productList.map((product) => (
    //           <Productcard key={product._id} product={product} />
    //         ))}
    //     </div>
    //   </div>
    // </Fragment>
    
      
        <Fragment>
          <div className="wrapper"></div>
          <h2 className="productsHeading">Products</h2>
          <div className="productContainer">
            {productList &&
              productList.map((product) => (
                <Productcard key={product._id} product={product} />
              ))}
          </div>

          <aside>
  <p></p>
  <Link>
  <h1>Price Range</h1>
  <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={100}
              width="50px"
              color='orange'
            />
    
  </Link>
  <Link>
  <h1>Category</h1>
  <ul>
              {categories &&
                categories.map((category) => (
                  <li
                    className="category-li "
                    key={category.title}
                    onClick={() => setCategory(category)}
                  >
                    {category.title}
                  </li>
                ))}
            </ul>

  </Link>
  <Link>
  <h1>Rating Above</h1>
  <Rating
              value={ratings}
              onChange={(e, newRating) => {
                setRatings(newRating);
              }}
              precision={0.5}
            />
  </Link>
 
</aside>

         
      
        </Fragment>
   
  
    
  );
};

export default SearchFilter;
