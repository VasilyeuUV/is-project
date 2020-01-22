import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './panel-main.css';

import { ManagersPage, ProductsPage, ClientsPage } from '../../pages';

// import ErrorBoundry from '../error-boundry';
// import ManagersStoreService from '../../services/managersstore-service';

const PanelMain = () => {
  return (
    <section className='col-md-9 panel-main'>
      <Switch>
        <Route path='/managers/' component={ManagersPage} exact />
        <Route path='/products/' component={ProductsPage} exact />
        <Route path='/clients/' component={ClientsPage} exact />
      </Switch>
    </section>
  );
};

// export default class PanelMain extends Component {
//   state = {
//     managersStoreService: new ManagersStoreService()
//   };

//   render() {
//     return (
//       <ErrorBoundry>
//         <ServiceProvider>
//           <Router>
//             <div className='panel-main-app'>
//               <Switch>
//                 <Route path='/managers/:id?' component={ManagersPage} />
//                 <Route path='/products/:id?' component={ProductsPage} />
//                 <Route path='/clients/:id?' component={ClientsPage} />
//                 <Route render={() => <h2>Page not found</h2>} />
//               </Switch>
//             </div>
//           </Router>
//         </ServiceProvider>
//       </ErrorBoundry>
//     );
//   }
// }

export default PanelMain;
