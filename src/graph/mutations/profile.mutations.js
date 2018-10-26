const { GraphQLNonNull } = require('graphql');
const { createError } = require('apollo-errors');

const { baseResolver } = require('../resolvers');
const profileService = require('../../service/profile.service');
const Profile = require('../types/profile');
const ProfileInput = require('../types/input/profile.input');

const mutations = {
  updateProfile: {
    type: Profile,
    args: {
      input: { type: new GraphQLNonNull(ProfileInput) }
    },
    resolve: baseResolver.createResolver(async (_, args) => {
      const response = await profileService.updateProfile({ ...args });
      if (response.message) {
        const UpdateError = createError('Error', {
          message: response.message
        });
        throw new UpdateError();
      }
      return response;
    })
  }
};

module.exports = mutations;
