import React from 'react';
import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './shipping.css';
import { useSelector, useDispatch } from 'react-redux';
import LocationCity from '@material-ui/icons/LocationCity';
import PlaceIcon from '@mui/icons-material/Place';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FaceIcon from '@material-ui/icons/Face';
import { useAlert } from 'react-alert';
import MultiSteps from './MultiSteps';
import { saveShippingDetails } from '../../reduxFeature/actions/cartAction';

const Shipping = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { shippingDetails } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [contact, setContact] = useState(
    shippingDetails.contact || user.contact
  );
  const [city, setCity] = useState(shippingDetails.city);
  const [address, setAddress] = useState(shippingDetails.address);
  const [province, SetProvince] = useState(
    shippingDetails.province || 'Bagmati Province'
  );

  const handleShippingSubmit = (e) => {
    e.preventDefault();

    if (user && user.role === 'admin') {
      alert.error('You are not authorized to order items.');
      return;
    }

    if (contact.length < 10 || contact.length > 10) {
      alert.error('Phone number should be 10 digits long');
      return;
    }

    dispatch(
      saveShippingDetails({ firstName, contact, city, address, province })
    );
    navigate('/order/details');
  };

  return (
    <Fragment>
   
      <div class="container">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <form  onSubmit={handleShippingSubmit}>
        <div class="form" >
          
        <label class="field">
            <span class="field__label" for="address">Name</span>
          
                <input
                  type="text"
                  placeholder="Name"
                  value={user?.firstName}
                  readOnly
                  onChange={(e) => setFirstName(e.target.value)}
                />
          </label>
          <label class="field">
            <span class="field__label" for="address">Contact</span>
            <input
                  type="number"
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  size="10"
                />
          </label>
          <label class="field">
            <span class="field__label" for="address">Province</span>
            <input
                  type="text"
                  placeholder="Province"
                  value={province}
                  onChange={(e) => SetProvince(e.target.value)}
                  readOnly
                />
          </label>
          <label class="field">
            <span class="field__label" for="address">Address</span>
            <input
                  type="text"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
          </label>
          <label class="field">
            <span class="field__label" for="country">City</span>
            <select
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="city">Select City</option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                </select>
          </label>
          <button class="button" type="submit"
                >Continue</button>
               
        </div>
       
        </form>
      </div>
    </Fragment>
  );
};

export default Shipping;
