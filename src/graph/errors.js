const { createError } = require('apollo-errors');

const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred! Please try again later'
});

const ForbiddenError = createError('ForbiddenError', {
  message: 'You are not allowed to do this'
});

const AuthenticationRequiredError = createError('AuthenticationRequiredError', {
  message: 'You must be logged in to do this'
});

module.exports = {
  UnknownError,
  ForbiddenError,
  AuthenticationRequiredError
};
