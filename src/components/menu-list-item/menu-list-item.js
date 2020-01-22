import React from 'react';

import './menu-list-item.css';

const MenuListItem = ({ manager }) => {
  const { name } = manager;
  return <span>{name}</span>;
};

export default MenuListItem;
