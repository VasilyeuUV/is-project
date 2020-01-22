import React from 'react';

import './sales-table.css';

const SalesTable = () => {
  return (
    <div className='sales-table-block'>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Count</th>
            <th>Sum</th>
            <th>Data</th>
            <th>Client</th>
            <th>Manager</th>
            <th>File name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Car</td>
            <td>1</td>
            <td>$40000</td>
            <td>22.02.2019</td>
            <td>Client15</td>
            <td>Ivanov</td>
            <td>Ivanov_22.02.2019.csv</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pencil</td>
            <td>5</td>
            <td>$5</td>
            <td>23.02.2019</td>
            <td>Client2</td>
            <td>Petrov</td>
            <td>Petrov_23.02.2019.csv</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
