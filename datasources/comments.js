const { DataSource } = require('apollo-datasource');

class CommentsAPI extends DataSource {
  constructor({ data }) {
    super();
    this.data = data;
  }

  getCommentsByPostId({ postId }) {
    return this.data.filter(commment => commment.postId === postId);
  }
}

module.exports = CommentsAPI;
