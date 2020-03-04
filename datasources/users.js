const { DataSource } = require('apollo-datasource');

class UsersAPI extends DataSource {
  constructor({ data }) {
    super();
    this.data = data;
  }

  getUserById({ userId }) {
    const user = this.data.find(user => user.id === userId);
    return user ? user : null;
  }
}

module.exports = UsersAPI;
