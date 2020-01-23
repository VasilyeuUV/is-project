import React from 'react';
import { Link } from 'react-router-dom';

import menu from '../../_constants/menu-items-const';

import './menu-left.css';

const MenuLeft = () => {
  return (
    <div className='menu-left d-flex'>
      <ul className='flex-column'>
        <li>
          <h3>
            <Link to={menu.manager.path}>{menu.manager.names}</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to={menu.product.path}>{menu.product.names}</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to={menu.client.path}>{menu.client.names}</Link>
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default MenuLeft;
