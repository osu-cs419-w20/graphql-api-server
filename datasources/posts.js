const { DataSource } = require('apollo-datasource');

class PostsAPI extends DataSource {
  constructor({ data }) {
    super();
    this.data = data;
  }

  getAllPosts() {
    return this.data || [];
  }

  getPostById({ postId }) {
    const post = this.data.find(post => post.id === postId);
    return post ? post : null;
  }

  getPostsByAuthorId({ authorId }) {
    return this.data.filter(post => post.authorId === authorId);
  }
}

module.exports = PostsAPI;
