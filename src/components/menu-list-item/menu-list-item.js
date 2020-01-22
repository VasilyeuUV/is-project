import React from 'react';

import './menu-list-item.css';

const MenuListItem = ({ item }) => {
  const { name } = item;
  return <span>{name}</span>;
};

export default MenuListItem;
