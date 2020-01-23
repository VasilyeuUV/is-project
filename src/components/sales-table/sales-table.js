import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sales-table.css';

import { withStoreService } from '../hoc';
import { fetchSales } from '../../actions';
import menu from '../../_constants/menu-items-const';

class SalesTable extends Component {
  state = {
    title: null,
    item: null
  };

  componentDidMount() {
    this.props.fetchSales();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.props.fetchSales();
    }
  }

  renderRow = (item, idx) => {
    const { id, product, count, sum, date, client, manager, filename } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{product.name}</td>
        <td>{count}</td>
        <td>${sum}</td>
        <td>{date}</td>
        <td>{client.name}</td>
        <td>{manager.name}</td>
        <td>{filename.name}</td>
      </tr>
    );
  };

  render() {
    console.log(this.props);
    const { title, items } = this.props;
    const itemId = this.props.item;
    let lst = items;
    if (itemId) {
      switch (title) {
        case menu.manager.names:
          lst = items.filter(item => item.manager.id === itemId);
          break;
        case menu.product.names:
          lst = items.filter(item => item.product.id === itemId);
          break;
        case menu.client.names:
          lst = items.filter(item => item.client.id === itemId);
          break;
        default:
          break;
      }
    }

    //const { items } = this.props;
    //console.log(lst);
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
          <tbody>{lst.map(this.renderRow)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ sales }) => {
  return {
    items: sales
  };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    fetchSales: fetchSales(storeService, dispatch)
  };
};

export default withStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(SalesTable)
);
