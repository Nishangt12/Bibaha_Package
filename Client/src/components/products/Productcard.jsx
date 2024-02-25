import React,{useState} from 'react';
import { Link,useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
// import Pagination from '@mui/material/Pagination';
import { addToCart } from '../../reduxFeature/actions/cartAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { useAlert } from 'react-alert';
import { useDispatch} from 'react-redux';
import './product.css';

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();
  const [quantity] = useState(1);

  const options = {
    edit: false,
    color: 'black',
    activeColor: 'orange',
    size: window.innerWidth < 600 ? 20 : 20,
    value: product.ratings,
    borderColor: '#000000',
    isHalf: true,
  };
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, quantity));
    alert.success('Item Added To Cart');
  };
  const buyProductHandler = () => {
    dispatch(addToCart(product._id, quantity));
  };
  const defaultImage = 'https://via.placeholder.com/250x250';

  return (
    <>
   
    

        <div className="product-grid">
            <div className="product-content">
                <h3 className="title"><Link to={`/product/${product._id}`} >{product.name}</Link></h3>
                <div className="price">{`Rs. ${product.price}`}</div>
                <ul className="rating">
                <ReactStars {...options} />{' '}
        <span>&nbsp;&nbsp; {product.numofReviews}</span>
                </ul>
                <ul class="product-links">
                    <li  disabled={product.stock === 0} 
                    onClick={addToCartHandler}><Link href="#"><i><FontAwesomeIcon icon={faCartShopping} /></i></Link></li>
                   
                    <li disabled={product.stock === 0}
                    onClick={buyProductHandler}><Link to={'/cart'}><i><FontAwesomeIcon icon={faMoneyBill} /></i></Link></li>
                </ul>
            </div>
            <div className="product-image">
               <Link to={`/product/${product._id}`}><span className="image">
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
