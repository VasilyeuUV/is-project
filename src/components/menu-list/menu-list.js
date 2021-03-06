import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withStoreService } from '../hoc';
import { fetchManagers, fetchProducts, fetchClients } from '../../actions';
import { compose } from '../../utils';
import menu from '../../_constants/menu-items-const';

import MenuListItem from '../menu-list-item';

import './menu-list.css';

const MenuList = ({ title, items, onItemSelected }) => {
  return (
    <ul className='list-group'>
      {items.map(item => {
        return (
          <li
            key={item.id}
            className='list-group-item'
            onClick={() => onItemSelected(title, item.id)}
          >
            <MenuListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

class MenuListContainer extends Component {
  componentDidMount() {
    //this.props.fetchManagers();
    this.updateData(this.props.title);
  }

  componentDidUpdate(prevProps) {
    const title = this.props.title;
    if (title !== prevProps.title) {
      this.updateData(title);
    }
  }

  updateData(title) {
    switch (title) {
      case menu.manager.names:
        this.props.fetchManagers();
        break;
      case menu.product.names:
        this.props.fetchProducts();
        break;
      case menu.client.names:
        this.props.fetchClients();
        break;
      default:
        new Error('Something bad happened');
        break;
    }
  }

  render() {
    const { title, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    const { managers } = this.props;
    if (managers.length > 0) {
      return (
        <MenuList
          title={title}
          items={managers}
          onItemSelected={this.props.onItemSelected}
        />
      );
    }

    const { products } = this.props;
    if (products.length > 0) {
      return (
        <MenuList
          title={title}
          items={products}
          onItemSelected={this.props.onItemSelected}
        />
      );
    }

    const { clients } = this.props;
    if (clients.length > 0) {
      return (
        <MenuList
          title={title}
          items={clients}
          onItemSelected={this.props.onItemSelected}
        />
      );
    }
    return <Spinner />;
  }
}

const mapStateToProps = ({ managers, products, clients, loading, error }) => {
  return { managers, products, clients, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    fetchManagers: fetchManagers(storeService, dispatch),
    fetchProducts: fetchProducts(storeService, dispatch),
    fetchClients: fetchClients(storeService, dispatch)
  };
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MenuListContainer);
