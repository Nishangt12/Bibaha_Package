import React from 'react';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './cart.css';

const ProductCart = ({ item, deleteCartItems }) => {
  return (
    <div className="bottom">
      <img className="productimage" src={item?.image} alt="ssa" />
      <div className="productCartdetails">
        <Link to={`/product/${item.product}`} className="productName">
          {item.name}
        </Link>
        <span className="productPrice">{`Price: Rs ${item.price}`}</span>
        {/* <p
          onClick={() => deleteCartItems(item.product)}
          className="cartdeleteButton"
        >
          <DeleteOutlineIcon sx={{ color: 'red', width: '50px' }} />
        </p> */}
      </div>
    </div>
  );
};

export default ProductCart;
