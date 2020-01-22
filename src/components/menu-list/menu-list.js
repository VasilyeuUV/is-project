// import React from 'react';
// import PropTypes from 'prop-types';

// import { withData } from '../hoc-helpers';
// import TestService from '../../services/test-service';
// import '.menu-list.css';

// const MenuList = props => {
//   const { data, onItemSelected, children: renderLabel } = props;

//   const items = data.map(item => {
//     const { id } = item;
//     const label = renderLabel(item);

//     return (
//       <li
//         className='list-group-item'
//         key={id}
//         onClick={() => onItemSelected(id)}
//       >
//         {label}
//       </li>
//     );
//   });

//   return <ul className='item-list list-group'>{items}</ul>;
// };

// MenuList.defaultProps = {
//   onItemSelected: () => {}
// };

// MenuList.propTypes = {
//   onItemSelected: PropTypes.func,
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
//   children: PropTypes.func.isRequired
// };

// const { getManagers } = new TestService();

// export default withData(MenuList, getManagers);

import React, { Component } from 'react';
import { connect } from 'react-redux';

//import TestService from '../../services/test-service';
import Spinner from '../spinner';

import './menu-list.css';

class MenuList extends Component {
  //currentService = new TestService();

  state = {
    managers: null
  };

  // componentDidMount() {
  //   this.currentService.GetManagers().then(managerList => {
  //     this.setState({ managerList });
  //   });
  //}

  render() {
    const { managers } = this.props;

    if (!managers) {
      return <Spinner />;
    }

    return (
      <ul className='list-group'>
        <li className='list-group-item'>Ivanov</li>
        <li className='list-group-item'>Petrov</li>
        <li className='list-group-item'>Sidorov</li>
      </ul>
    );
  }
}

const mapStateToProps = ({ managers }) => {
  return { managers };
};

export default connect(mapStateToProps)(MenuList);
