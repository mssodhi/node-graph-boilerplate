const { createResolver } = require('apollo-resolvers');
const { isInstance } = require('apollo-errors');

const {
  UnknownError,
  ForbiddenError,
  AuthenticationRequiredError
} = require('./errors');

const baseResolver = createResolver(
  //incoming requests will pass through this resolver like a no-op
  null,
  /*
   Only mask outgoing errors that aren't already apollo-errors,
   such as ORM errors etc
 */
  (_, args, context, error) => (isInstance(error) ? error : new UnknownError())
);

const isAuthenticatedResolver = baseResolver.createResolver(
  // Extract the user from context (undefined if non-existent)
  (_, args, { profile }) => {
    if (!profile) throw new AuthenticationRequiredError();
  }
);

const isAdminResolver = isAuthenticatedResolver.createResolver(
  // Extract the user and make sure they are an admin
  (_, args, { profile }) => {
    /*
      If thrown, this error will bubble up to baseResolver's
      error callback (if present).  If unhandled, the error is returned to
      the client within the `errors` array in the response.
    */
    if (profile.role !== 'Admin') throw new ForbiddenError();

    /*
      Since we aren't returning anything from the
      request resolver, the request will continue on
      to the next child resolver or the response will
      return undefined if no child exists.
    */
  }
);

module.exports = {
  baseResolver,
  isAdminResolver,
  isAuthenticatedResolver
};
