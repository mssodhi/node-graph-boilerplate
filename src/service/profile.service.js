const makeRequest = require('./base.service').makeRequest;

const service = {
  async findById(payload) {
    return await makeRequest({
      type: 'profile',
      action: 'findProfileById',
      payload: payload
    });
  },

  async updateProfile(payload) {
    return await makeRequest({
      type: 'profile',
      action: 'updateProfile',
      payload: payload
    });
  }
};

module.exports = service;
