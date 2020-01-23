import React from 'react';

import './menu-list-item.css';

const MenuListItem = ({ item }) => {
  const { name } = item;
  return <h4>{name}</h4>;
};

export default MenuListItem;
