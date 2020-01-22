import React from 'react';
import { Link } from 'react-router-dom';

import menu from '../../_project-constants/menu-items-const';

import './menu-left.css';

const MenuLeft = () => {
  return (
    <div className='menu-left d-flex'>
      <ul className='flex-column'>
        <li>
          <Link to={menu.manager.path}>{menu.manager.names}</Link>
        </li>
        <li>
          <Link to={menu.product.path}>{menu.product.names}</Link>
        </li>
        <li>
          <Link to={menu.client.path}>{menu.client.names}</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuLeft;
