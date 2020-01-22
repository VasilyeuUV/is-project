import React from 'react';

import { menu } from '../../_constants';

import Row from '../row';
import MenuList from '../menu-list';
import SalesTable from '../sales-table';
import SalesTotalTable from '../sales-total-table';

const ManagersPage = ({ history, match }) => {
  return (
    <Row
      top={
        <div className='col-md-12'>
          <h2>{menu.manager.names}</h2>
        </div>
      }
      left={<MenuList />}
      right={<SalesTable />}
      down={<SalesTotalTable />}

      //   left={<ManagerList onItemSelected={(id) => history.push(id)} />}
      //   right={<ManagerDetails itemId={id} />}
    />
  );
};

export default ManagersPage; // withRouter(ManagersPage);
