export default class SalesStoreService {
  data = [
    {
      id: 1,
      dtg: new Date(2020, 0, 10),
      sum: 100,
      managerId: 1,
      productId: 1,
      clientId: 1,
      fileNameId: 1
    },
    {
      id: 2,
      dtg: new Date(2020, 0, 10),
      sum: 150,
      managerId: 1,
      productId: 2,
      clientId: 2,
      fileNameId: 1
    },
    {
      id: 1,
      dtg: new Date(2020, 0, 10),
      sum: 100,
      managerId: 1,
      productId: 1,
      clientId: 1,
      fileNameId: 1
    },
    {
      id: 3,
      dtg: new Date(2020, 0, 10),
      sum: 200,
      managerId: 1,
      productId: 1,
      clientId: 2,
      fileNameId: 1
    }
  ];

  getSales() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
