const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const UsersAPI = require('./datasources/users');
const PostsAPI = require('./datasources/posts');
const CommentsAPI = require('./datasources/comments');

const usersData = require('./data/users');
const postsData = require('./data/posts');
const commentsData = require('./data/comments');

const app = express();
const port = process.env.PORT || 8000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    usersAPI: new UsersAPI({ data: usersData }),
    postsAPI: new PostsAPI({ data: postsData }),
    commentsAPI: new CommentsAPI({ data: commentsData })
  })
});

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log("== Server listening on port", port);
});
