import React, { useState } from 'react';
import { Fragment, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import {
  getProductDetails,
  errorClear,
} from '../../reduxFeature/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './productdetails.css';
import ReviewSection from '../mainPage/Reviews/ReviewSection';
import Rating from '@mui/material/Rating';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Loader from '../mainPage/FrontFeatures/Loading/Loader';
import { useAlert } from 'react-alert';

import { addToCart } from '../../reduxFeature/actions/cartAction';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from '@mui/material';
import { writeReview } from '../../reduxFeature/actions/reviewAction';
import { WRITE_REVIEW_RESET } from '../../reduxFeature/reducers/Review/reviewConstants';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector((state) => state.review);

  const options = {
    size: 'large',
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set('rating', rating);
    myForm.set('comment', comment);
    myForm.set('productId', params.id);

    dispatch(writeReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(errorClear());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(errorClear());
    }

    if (success) {
      alert.success('Review Submitted Successfully');
      dispatch({ type: WRITE_REVIEW_RESET });
    }

    dispatch(getProductDetails(params.id));
  }, [dispatch, params.id, alert, error, reviewError, success]);

  const addToCartHandler = () => {
    dispatch(addToCart(params.id, quantity));
    alert.success('Item Added To Cart');
  };

  const buyProductHandler = () => {
    dispatch(addToCart(params.id, quantity));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>

  <main>
    <div class="card">
      <div class="card__title">
        <div class="icon">
          <Link to={"/allProducts/"}><i><KeyboardBackspaceIcon/></i></Link>
        </div>
        <h3>{product.category}</h3>
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h1>{product.name}</h1>
           
            <p class="price">{`Rs ${product.price}`}</p>
          </div>
          <div class="image">
          <Carousel className="Carousel">
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="ImageCro"
                    key={i}
                    src={item?.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
          </div>
        </div>
        <div class="half">
          <div class="description">
            <p>{product.description}.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <span class="stock"><i class="fa fa-pen"></i><b
                    className={
                      product.stock <= 0
                        ? 'outstock'
                        : product.stock <= 3
                        ? 'lowstock'
                        : 'instock'
                    }
                  >
                    {product.stock <= 0
                      ? 'OutOfStock'
                      : product.stock <= 3
                      ? 'Low on Stock'
                      : ' In Stock'}
                  </b></span>
          <div class="reviews">
            <ul class="stars">
              <li><i> <Rating {...options} /></i></li>
            </ul>
            <span>({product.numofReviews} reviews)</span>
          </div>
        </div>
      </div>
      <div class="card__footer">
      
        <div class="action">
        <Link to={"/cart"}><button type="button" disabled={product.stock === 0} 
                    onClick={buyProductHandler}>Buy Now</button></Link>
          <button type="button" disabled={product.stock === 0} 
                    onClick={addToCartHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  </main>
            <div className="reviewButton">
              <button className="Review" onClick={submitReviewToggle}>
                Review this product
              </button>
              <Dialog
                aria-labelledby="simple-dialog-title"
                open={open}
                onClose={submitReviewToggle}
              >
                <DialogTitle>Submit Review</DialogTitle>
                <DialogContent className="submitDialog">
                  <Rating
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    size="large"
                  />

                  <textarea
                    className="submitDialogTextArea"
                    cols="30"
                    rows="5"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </DialogContent>
                <DialogActions>
                  <Button onClick={submitReviewToggle} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={reviewSubmitHandler} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          
          <div className="ReviewSection">
            <h3 className="reviewHead">Ratings & Reviews</h3>

            {product.reviews && product.reviews[0] ? (
              <div className="reviews">
                {product.reviews &&
                  product.reviews.map((review) => (
                    <ReviewSection key={review._id} review={review} />
                  ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews in this Product</p>
            )}
          </div>










        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
