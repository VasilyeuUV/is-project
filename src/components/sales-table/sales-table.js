import React from 'react';
import { connect } from 'react-redux';

import './sales-table.css';

const SalesTable = ({ items }) => {
  const renderRow = (item, idx) => {
    const { id, product, count, sum, date, client, manager, filename } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{product}</td>
        <td>{count}</td>
        <td>${sum}</td>
        <td>{date}</td>
        <td>{client}</td>
        <td>{manager}</td>
        <td>{filename}</td>
      </tr>
    );
  };

  return (
    <div className='sales-table-block'>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Count</th>
            <th>Sum</th>
            <th>Date</th>
            <th>Client</th>
            <th>Manager</th>
            <th>File name</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ sales }) => {
  return {
    items: sales
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(SalesTable);
