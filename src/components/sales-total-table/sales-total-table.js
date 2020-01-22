import React from 'react';

import './sales-total-table.css';

const SalesTotalTable = () => {
  return (
    <div className='sales-total-table-block'>
      <table className='table'>
        <thead>
          <tr>
            <th># count</th>
            <th>Names count</th>
            <th>Products count</th>
            <th>Total</th>
            <th>Days count</th>
            <th>Clients count</th>
            <th>Managers count</th>
            <th>Files count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>5</td>
            <td>200</td>
            <td>$50000</td>
            <td>3 days</td>
            <td>10</td>
            <td>5</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesTotalTable;
