import React from 'react'
import img1 from "../imgs/3.jpg"
import img2 from "../imgs/1.jpg"
import img3 from "../imgs/2.jpg"

import { Box, Container } from '@mui/material';
import Promotions from './mainPage/HomePage/Promotions';
import Products from './products/Productcard';
import Category from './mainPage/HomePage/Category';
import { getProductsHome } from '../reduxFeature/actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Loader from './mainPage/FrontFeatures/Loading/Loader';
const StyledContainer = styled(Container)`
  width: 100%;
`;

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProductsHome());
  }, [dispatch, error, alert]);

  //styles
  const styles = {
    container: {
      display: 'flex',
      margin: '3vmax auto',
      width: '80vw',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: '100%',
    },

    H1: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: '3vmax',
      borderBottom: '1px solid',
      width: '25vmax',
      padding: '1vmax',
      margin: '5vmax auto',
      color: 'black',
      marginTop: '10px',
      marginBottom: '20px',
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.5rem 1.5rem',
      fontSize: '1.1rem',
      color: '#fff',
      backgroundColor: 'orange',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      margin: '0 auto',
      marginBottom: '10px',
    },
    categoryContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifContent: 'space-between',
      gap: '20px',
      margin: '0 auto',
      maxWidth: '1200px',
    },
  };
  return (
  <>
  {loading ? (
        <Loader />
      ) : (
        <>
      <section className="text-gray-600 body-font bg-gray-50 mb-4">
        
  <div className="container px-5 py-16 mx-auto flex flex-wrap">
  <div className="flex flex-col text-center w-full mb-5">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-orange-500">Plan Your Wedding Here</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed italic font-semibold">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" className="w-full object-cover h-full object-left-bottom block opacity-50 absolute inset-0" src={img1}/>
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Heavy Mala</h2>
         
          <Link to={"/allProducts"} className="mt-3 cursor-pointer text-white inline-flex items-center font-semibold bg-orange-400 p-1.5 rounded-md hover:border border-orange-500  hover:text-orange-500 hover:bg-white">Click Here
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" className="w-full object-cover h-full md:object-right-bottom block opacity-50  absolute inset-0" src={img2}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Medium Mala</h2>
             
              <Link className="mt-3 cursor-pointer text-white inline-flex items-center font-semibold bg-orange-400 p-1.5 rounded-md hover:border border-orange-500  hover:text-orange-500 hover:bg-white">Click Here 
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" className="w-full object-cover h-full md:object-right-bottom block opacity-50  absolute inset-0" src={img3}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Light Mala</h2>
              <Link className="mt-3 cursor-pointer text-white inline-flex items-center font-semibold bg-orange-400 p-1.5 rounded-md hover:border border-orange-500  hover:text-orange-500 hover:bg-white">Click Here
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
          <h1 className="h1" style={styles.H1}>
            Feautred Products
          </h1>
          <div className="container" id="container" style={styles.container}>
            {products &&
              products.map((product) => (
                <Products product={product} key={product._id} />
              ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/allProducts" style={{ textDecoration: 'none' }}>
              <button style={styles.button}>View More</button>
            </Link>
          </div>
        
        </section>
</>
)}
 </>   
  );
};

export default Home
