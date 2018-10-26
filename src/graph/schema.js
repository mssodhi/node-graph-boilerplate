const { GraphQLSchema } = require('graphql');

const query = require('./query');
const mutation = require('./mutations');

module.exports = new GraphQLSchema({
  query,
  mutation
});
