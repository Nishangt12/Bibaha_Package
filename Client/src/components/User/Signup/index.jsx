import { useState, useEffect, Fragment } from 'react';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { errorClear, register } from '../../../reduxFeature/actions/userAction';
import { useAlert } from 'react-alert';
import PasswordInput from './Passwordinput';
import Loader from '../../mainPage/FrontFeatures/Loading/Loader';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FaceIcon from '@material-ui/icons/Face';

const Signup = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();


  const { error, success } = useSelector((state) => state.user);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    contact: '',
    avatar: '',
    avatarPreview: null,
  });

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    address,
    contact,
  } = data;

  const [avatar, setAvatar] = useState('/profile.png');
  const [avatarPreview, setAvatarPreview] = useState('/profile.png');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    if (password !== confirmPassword) {
      setPasswordError('Password does not match');
      return;
    }

    if (password.length < 8) {
      setPasswordError(' Password should be at least 8 Characters');
    }
    e.preventDefault();
    const form = new FormData();
    form.set('firstName', firstName);
    form.set('lastName', lastName);
    form.set('email', email);
    form.set('address', address);
    form.set('contact', contact);
    form.set('password', password);
    form.set('confirmPassword', confirmPassword);
    form.set('avatar', avatar);

    if (contact.length < 10 || contact.length > 10) {
      alert.error('Phone Number should be 10 digits Long');
      return;
    }
    alert.success("Verification mail sent")
    dispatch(register(form));
    resetFormData();
    
  };

  const resetFormData = () => {
    setData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      contact: '',
      avatar: '',
      avatarPreview: null,
    });
  };

  const registerHandleChange = (e) => {
    if (e.target.name === 'avatar') {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(errorClear());
    }
    console.log(success);
    if (success) {
      alert.success("Email sent");
     
    }
  }, [dispatch, error, alert, success]);

  return (
    <Fragment>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.right}>
            <form
              className={styles.form_container}
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <h2>Create Account</h2>
              <div className={styles.nameInRow}>
                <div className={styles.signUpName}>
                  <FaceIcon className={styles.icon} />
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={registerHandleChange}
                    value={firstName}
                    required
                    className={styles.nameinput}
                  />
                </div>
                <div className={styles.signUpName}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={registerHandleChange}
                    value={lastName}
                    required
                    className={styles.nameinput}
                  />
                  <FaceIcon className={styles.icon} />
                </div>
              </div>
              <div className={styles.signUpName}>
                <MailOutlineIcon className={styles.icon} />
                <input
                  type="email"
                  placeholder="Email "
                  name="email"
                  onChange={registerHandleChange}
                  value={email}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.signUpName}>
                <LocationCityIcon className={styles.icon} />
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={registerHandleChange}
                  value={address}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.signUpName}>
                <SmartphoneIcon className={styles.icon} />
                <input
                  type="Number"
                  placeholder="Contacts"
                  name="contact"
                  onChange={registerHandleChange}
                  value={contact}
                  required
                  className={styles.input}
                  size="10"
                />
              </div>

              <div className={styles.signUpName}>
                <PasswordInput
                  placeholder="Password"
                  name="password"
                  onChange={registerHandleChange}
                  value={password}
                  required
                />
              </div>
              {passwordError && (
                <div
                  className={styles.error_message}
                  style={{
                    fontSize: '0.5rem',
                    alignItems: 'flex-start',
                    color: 'red',
                  }}
                >
                  {passwordError}
                </div>
              )}

              <div className={styles.signUpName}>
                <PasswordInput
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={registerHandleChange}
                  value={confirmPassword}
                  required
                />
              </div>
              {passwordError && (
                <div
                  className={styles.error_message}
                  style={{
                    fontSize: '0.5rem',

                    color: 'red',
                  }}
                >
                  {passwordError}
                </div>
              )}

              <div id={styles.registerImage}>
                <img src={avatarPreview} alt="Avatar Preview" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={registerHandleChange}
                />
              </div>

              <button type="submit" className={styles.green_btn}>
                Sign Up
              </button>

              <div className="aregister">
                <span className="aregister_span">
                  Already Register?{' '}
                  <Link
                    className="alogin"
                    to="/login"
                    style={{ textDecoration: 'none' }}
                  >
                    Login Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* )} */}
    </Fragment>
  );
};

export default Signup;
