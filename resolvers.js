module.exports = {
  Query: {
    posts: (_, __, { dataSources }) => dataSources.postsAPI.getAllPosts(),
    post: (_, { id }, { dataSources }) => dataSources.postsAPI.getPostById({ postId: id })
  },

  Post: {
    author: (post, _, { dataSources }) => dataSources.usersAPI.getUserById({ userId: post.authorId }),
    comments: (post, _, { dataSources }) => dataSources.commentsAPI.getCommentsByPostId({ postId: post.id })
  },

  Comment: {
    author: (comment, _, { dataSources }) => dataSources.usersAPI.getUserById({ userId: comment.authorId }),
    post: (comment, _, { dataSources }) => dataSources.postsAPI.getPostById({ postId: comment.postId })
  },

  User: {
    posts: (user, _, { dataSources }) => dataSources.postsAPI.getPostsByAuthorId({ authorId: user.id })
  }
};
