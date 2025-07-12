export const selectAuthorization = state => state.authorization;
export const selectAuthIsLoading = state => state.authorization.isLoading;
export const selectAuthError = state => state.authorization.error;
export const selectAuthToken = state => state.authorization.token;
export const selectAuthUtherData = state => state.authorization.user;
export const selectAuthAuthenticated = state =>
  state.authorization.authenticated;
