const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInputObjectType
} = require('graphql');

const ROLES = require('../enums/roles');

module.exports = new GraphQLInputObjectType({
  name: 'ProfileInput',
  description: 'Profile input type',
  fields: {
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    role: { type: new GraphQLNonNull(ROLES) },
    phone: { type: GraphQLString }
  }
});
