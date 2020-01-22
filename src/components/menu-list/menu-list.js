import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withStoreService } from '../hoc';
import { fetchManagers } from '../../actions';
import { compose } from '../../utils';

import MenuListItem from '../menu-list-item';

import './menu-list.css';

const MenuList = ({ managers }) => {
  return (
    <ul className='list-group'>
      {managers.map(manager => {
        return (
          <li key={manager.id} className='list-group-item'>
            <MenuListItem manager={manager} />
          </li>
        );
      })}
    </ul>
  );
};

class MenuListContainer extends Component {
  componentDidMount() {
    this.props.fetchManagers();
  }

  render() {
    const { managers, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <MenuList managers={managers} />;
  }
}

const mapStateToProps = ({ managers, loading, error }) => {
  return { managers, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return { fetchManagers: fetchManagers(storeService, dispatch) };
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MenuListContainer);
