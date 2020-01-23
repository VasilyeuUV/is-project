export default class TestService {
  _managers = [
    { id: 1, name: 'Ivanov' },
    { id: 2, name: 'Petrov' },
    { id: 3, name: 'Popov' },
    { id: 4, name: 'Sidorov' }
  ];

  _clients = [
    { id: 1, name: 'Client_1' },
    { id: 2, name: 'Client_2' },
    { id: 3, name: 'Client_3' },
    { id: 4, name: 'Client_4' }
  ];

  _products = [
    { id: 1, name: 'Product_1', cost: 111 },
    { id: 2, name: 'Product_2', cost: 222 },
    { id: 3, name: 'Product_3', cost: 333 },
    { id: 4, name: 'Product_4', cost: 444 }
  ];

  _filenames = [
    { id: 1, name: 'Ivanov_10.01.2020', dtg: '10.01.2020' },
    { id: 2, name: 'Petrov_10.01.2020', dtg: '10.01.2020' },
    { id: 3, name: 'Popov_10.01.2020', dtg: '10.01.2020' },
    { id: 4, name: 'Sidorov_10.01.2020', dtg: '10.01.2020' },
    { id: 5, name: 'Ivanov_11.01.2020', dtg: '11.01.2020' },
    { id: 6, name: 'Petrov_11.01.2020', dtg: '11.01.2020' },
    { id: 7, name: 'Popov_11.01.2020', dtg: '11.01.2020' },
    { id: 8, name: 'Sidorov_11.01.2020', dtg: '11.01.2020' }
  ];

  _sales = [
    {
      id: 1,
      dtg: '10.01.2020',
      sum: 1111,
      managerId: 1,
      productId: 2,
      clientId: 3,
      fileNameId: 1
    },
    {
      id: 2,
      dtg: '10.01.2020',
      sum: 22222,
      managerId: 2,
      productId: 3,
      clientId: 4,
      fileNameId: 2
    },
    {
      id: 3,
      dtg: '10.01.2020',
      sum: 3333,
      managerId: 3,
      productId: 4,
      clientId: 1,
      fileNameId: 3
    },
    {
      id: 4,
      dtg: '10.01.2020',
      sum: 4444,
      managerId: 4,
      productId: 1,
      clientId: 2,
      fileNameId: 4
    },
    {
      id: 5,
      dtg: '11.01.2020',
      sum: 5555,
      managerId: 4,
      productId: 3,
      clientId: 2,
      fileNameId: 4
    },
    {
      id: 6,
      dtg: '11.01.2020',
      sum: 6666,
      managerId: 3,
      productId: 2,
      clientId: 1,
      fileNameId: 3
    },
    {
      id: 7,
      dtg: '11.01.2020',
      sum: 7777,
      managerId: 2,
      productId: 1,
      clientId: 4,
      fileNameId: 2
    },
    {
      id: 8,
      dtg: '11.01.2020',
      sum: 8888,
      managerId: 1,
      productId: 4,
      clientId: 3,
      fileNameId: 1
    }
  ];

  getItems(data, transform) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.99) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(data.map(transform));
        }
      }, 700);
    });
  }

  getManagers = () => {
    return this.getItems(this._managers, this._transformManager);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (Math.random() > 0.99) {
    //       reject(new Error('Something bad happened'));
    //     } else {
    //       resolve(this._managers.map(this._transformManager));
    //     }
    //   }, 700);
    // });
  };

  getManager = id => {
    const managers = this.getManagers();
    console.log(managers);
    return managers.find(manager => manager.id === id);
  };

  getProsucts = () => {
    return this.getItems(this._products, this._transformProduct);
  };

  getClients = () => {
    return this.getItems(this._clients, this._transformClient);
  };

  getSales = () => {
    return this.getItems(this._sales, this._transformSale);
  };

  _transformManager = manager => {
    return {
      id: manager.id,
      name: manager.name
    };
  };

  _transformProduct = product => {
    return {
      id: product.id,
      name: product.name,
      cost: product.cost
    };
  };

  _transformClient = client => {
    return {
      id: client.id,
      name: client.name
    };
  };

  _transformFilename = filename => {
    return {
      id: filename.id,
      name: filename.name,
      dtg: filename.dtg
    };
  };

  _transformSale = sale => {
    const tSale = {
      id: sale.id,
      date: sale.dtg,
      count: 1,
      sum: sale.sum,
      manager: this._managers.find(manager => manager.id === sale.managerId),
      product: this._products.find(product => product.id === sale.productId),
      client: this._clients.find(client => client.id === sale.clientId),
      filename: this._filenames.find(
        filename => filename.id === sale.fileNameId
      )
    };
    return tSale;
  };
}
