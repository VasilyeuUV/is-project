import React, { Component } from 'react';

import './data-page.css';

import MenuList from '../../menu-list';
import SalesTable from '../../sales-table';
//import SalesTotalTable from '../../sales-total-table';

// const DataPage = ({ title }) => {

class DataPage extends Component {
  state = {
    title: null,
    selectedItem: null
  };

  onItemSelected = (title, item) => {
    this.setState({
      title: title,
      selectedItem: item
    });
  };

  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <div className='col-md-12'>
          <h2>{title}</h2>
        </div>
        <div className='row mb2'>
          <div className='col-md-3'>
            <MenuList title={title} onItemSelected={this.onItemSelected} />
          </div>
          <div className='col-md-9 data-page-block'>
            <SalesTable
              title={this.state.title}
              item={this.state.selectedItem}
            />
            {/* <SalesTotalTable /> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DataPage;
