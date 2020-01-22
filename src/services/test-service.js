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
      productId: 1,
      clientId: 1,
      fileNameId: 1
    },
    {
      id: 2,
      dtg: '10.01.2020',
      sum: 22222,
      managerId: 2,
      productId: 2,
      clientId: 2,
      fileNameId: 2
    },
    {
      id: 3,
      dtg: '10.01.2020',
      sum: 3333,
      managerId: 3,
      productId: 3,
      clientId: 3,
      fileNameId: 3
    },
    {
      id: 4,
      dtg: '10.01.2020',
      sum: 4444,
      managerId: 4,
      productId: 4,
      clientId: 4,
      fileNameId: 4
    },
    {
      id: 5,
      dtg: '11.01.2020',
      sum: 5555,
      managerId: 1,
      productId: 1,
      clientId: 1,
      fileNameId: 5
    },
    {
      id: 6,
      dtg: '11.01.2020',
      sum: 6666,
      managerId: 2,
      productId: 2,
      clientId: 2,
      fileNameId: 6
    },
    {
      id: 7,
      dtg: '11.01.2020',
      sum: 7777,
      managerId: 3,
      productId: 3,
      clientId: 3,
      fileNameId: 7
    },
    {
      id: 8,
      dtg: '11.01.2020',
      sum: 8888,
      managerId: 4,
      productId: 4,
      clientId: 4,
      fileNameId: 8
    }
  ];

  // getItems() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (Math.random() > 0.75) {
  //         reject(new Error('Something bad happened'));
  //       } else {
  //         resolve(this.data);
  //       }
  //     }, 700);
  //   });
  // }

  getManagers = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.99) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this._managers.map(this._transformManager));
        }
      }, 700);
    });
  };

  // getManager = async id => {
  //   const manager = await this.getResource(`/managers/${id}/`);
  //   return this._transformManager(manager);
  // };

  getProducts = () => {
    return new Promise(resolve => {
      resolve(this._products.map(this._transformProduct).slice(0, 5));
    });
  };

  // getProduct = async id => {
  //   const product = await this.getResource(`/products/${id}/`);
  //   return this._transformProduct(product);
  // };

  getClients = () => {
    return new Promise(resolve => {
      resolve(this._clients.map(this._transformClient).slice(0, 5));
    });
  };

  // getClient = async id => {
  //   const client = await this.getResource(`/clients/${id}/`);
  //   return this._transformClient(client);
  // };

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
}
