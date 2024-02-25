import React from 'react';
import { Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CircleIcon from '@mui/icons-material/Circle';
import CategoryIcon from '@mui/icons-material/Category';
import './sidebar.css';



export const LeftSidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> 
          Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p>
          <CircleIcon />
          Product
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> 
          Users
        </p>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/categories">
        <p>
          <CategoryIcon /> 
          Category
        </p>
      </Link>
    </div>
  );
};
