import React from 'react';

import './data-page.css';

import MenuList from '../../menu-list';
import SalesTable from '../../sales-table';
import SalesTotalTable from '../../sales-total-table';

const DataPage = ({ title }) => {
  return (
    <React.Fragment>
      <div className='col-md-12'>
        <h2>{title}</h2>
      </div>
      <div className='row mb2'>
        <div className='col-md-3'>
          <MenuList />
        </div>
        <div className='col-md-9'>
          <SalesTable />
          <SalesTotalTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataPage;
