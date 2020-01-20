export default class ManagerStoreService {
  data = [
    {
      id: 1,
      name: "Ivanov"
    },
    {
      id: 2,
      name: "Petrov"
    },
    {
      id: 3,
      name: "Popov"
    },
    {
      id: 4,
      name: "Sidorov"
    }
  ];

  getManagers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
