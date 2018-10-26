const { GraphQLEnumType } = require('graphql');

const roleEnumType = new GraphQLEnumType({
  name: 'RoleEnumType',
  values: {
    USER: {
      value: 'USER'
    }
  }
});

module.exports = roleEnumType;
