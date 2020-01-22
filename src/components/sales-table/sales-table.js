import React from 'react';

const SalesTable = () => {
  return (
    <div className='sales-table'>
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>

        <tbody>
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
