import React from 'react';

import './panel-left.css';

import MenuLeft from '../../menu-left';

const PanelLeft = menu => {
  return (
    <section className='col-md-3 panel-left'>
      <MenuLeft menu={menu} />
    </section>
  );
};

export default PanelLeft;
