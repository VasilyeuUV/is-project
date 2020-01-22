import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';

import SalesTable from '../sales-table';

const ProductsPage = ({ history, match }) => {
  // const { id } = match.params;

  return (
    <Row
      top={
        <div className='col-md-12'>
          <h2>Products</h2>
        </div>
      }
      left={<span>Product Menu</span>}
      right={<SalesTable />}

      //   left={<ManagerList onItemSelected={(id) => history.push(id)} />}
      //   right={<ManagerDetails itemId={id} />}
    />
  );
};

export default ProductsPage; // withRouter(ManagersPage);
