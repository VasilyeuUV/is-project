import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withStoreService } from '../hoc';
import {
  managersLoaded,
  managersRequested,
  managersError
} from '../../actions';
import { compose } from '../../utils';

import MenuListItem from '../menu-list-item';

import './menu-list.css';

class MenuList extends Component {
  componentDidMount() {
    this.props.fetchManagers();

    // const {
    //   storeService,
    //   managersLoaded,
    //   managersRequested,
    //   managersError
    // } = this.props;
    // managersRequested();
    // storeService
    //   .getManagers()
    //   .then(data => managersLoaded(data))
    //   .catch(err => managersError(err));
  }

  render() {
    const { managers, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

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
  }
}

const mapStateToProps = ({ managers, loading, error }) => {
  return { managers, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { storeService } = ownProps;
  return {
    fetchManagers: () => {
      dispatch(managersRequested());
      storeService
        .getManagers()
        .then(data => dispatch(managersLoaded(data)))
        .catch(err => dispatch(managersError(err)));
    }
  };
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(MenuList);
