const request = require('request');

const { SERVER_URL } = require('../config/config');

const service = {
  async makeRequest(json) {
    return await new Promise((resolve, reject) => {
      const options = {
        uri: `${SERVER_URL}/service`,
        method: 'POST',
        json: json
      };
      request.post(options, (error, response, body) => {
        if (error) reject(error);
        resolve(body);
      });
    });
  }
};

module.exports = service;
