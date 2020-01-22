import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { PersonDetails, PersonList } from '../sw-components';

import MenuList from '../menu-list';
import Row from '../row';

import SalesTable from '../sales-table';

const ManagersPage = ({ history, match }) => {
  return (
    <Row
      top={
        <div className='col-md-12'>
          <h2>Managers</h2>
        </div>
      }
      left={<MenuList />}
      right={<SalesTable />}

      //   left={<ManagerList onItemSelected={(id) => history.push(id)} />}
      //   right={<ManagerDetails itemId={id} />}
    />
  );
};

export default ManagersPage; // withRouter(ManagersPage);
