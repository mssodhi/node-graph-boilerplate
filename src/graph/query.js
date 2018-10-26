const { GraphQLObjectType, GraphQLNonNull, GraphQLID } = require('graphql');

const Profile = require('./types/profile');
const profileService = require('../service/profile.service');
const { baseResolver } = require('./resolvers');

module.exports = new GraphQLObjectType({
  name: 'Root',
  description: 'Queries to Graph',
  fields: {
    profile: {
      type: Profile,
      description: 'Profile query',
      args: {
        profileId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: baseResolver.createResolver((_, args) =>
        profileService.findById({
          profileId: args.profileId
        })
      )
    }
  }
});
