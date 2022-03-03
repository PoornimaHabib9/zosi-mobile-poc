import { requestInterceptor } from './apiInterceptor';
import { CLIENT_ID, AS_USER_ID } from '../constants/appConstants';

const { REACT_APP_AUTH0_AUDIENCE, REACT_APP_API_GATEWAY_URL } = process.env;
const logoutSpy = jest.fn();
const getAccessTokenSilentlySpy = jest.fn();

describe('apiInterceptor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getAccessTokenSilentlySpy.mockResolvedValue('TeStAuThRiZaTiOnToKeN');
  });
  describe('requestInterceptor', () => {
    describe('authentication feature', () => {
      it.each([
        ['request is not for api url', { url: 'http://not/api', headers: { some: 'test:scope' } }, true],
        ['there is no scope in request headers', { url: REACT_APP_API_GATEWAY_URL, headers: {} }, true],
        ['user is not authenticated', { url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } }, false],
      ])('should not add authorization header when %s', async (scenario, req, isAuthenticated) => {
        const request = await requestInterceptor(
          req, getAccessTokenSilentlySpy, isAuthenticated, logoutSpy,
        );
        expect(getAccessTokenSilentlySpy).not.toHaveBeenCalled();
        expect(logoutSpy).not.toHaveBeenCalled();
        expect(request.headers.Authorization).toBeUndefined();
      });
      it('should get a user authentication token', async () => {
        await requestInterceptor(
          { url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } }, getAccessTokenSilentlySpy, true, logoutSpy,
        );
        expect(getAccessTokenSilentlySpy).toHaveBeenCalledWith({
          audience: REACT_APP_AUTH0_AUDIENCE,
          scope: 'test:scope',
        });
        expect(logoutSpy).not.toHaveBeenCalled();
      });
      it('should log user out when user authentication fails', async () => {
        const getAccessTokenSilentlyErrorSpy = jest.fn();
        getAccessTokenSilentlyErrorSpy.mockImplementation(() => {
          throw new Error('User not found');
        });
        await requestInterceptor(
          { url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } }, getAccessTokenSilentlyErrorSpy, true, logoutSpy,
        );
        expect(logoutSpy).toHaveBeenCalled();
      });
      it('should add authorization headers to the request', async () => {
        const request = await requestInterceptor(
          { url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } }, getAccessTokenSilentlySpy, true, logoutSpy,
        );
        expect(request.headers.Authorization).toBe('Bearer TeStAuThRiZaTiOnToKeN');
      });
      it('should remove scope from request headers when done', async () => {
        const request = await requestInterceptor(
          { url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } }, getAccessTokenSilentlySpy, true, logoutSpy,
        );
        expect(request.headers.scope).toBeUndefined();
      });
    });
    describe('in "as user" mode', () => {
      beforeEach(() => {
        localStorage.setItem(AS_USER_ID, 'AsUser|TestId');
      });
      describe('for "get" requests', () => {
        it('should add relevant scopes when authenticating', async () => {
          await requestInterceptor(
            { method: 'get', url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } },
            getAccessTokenSilentlySpy,
            true,
            logoutSpy,
          );
          expect(getAccessTokenSilentlySpy).toHaveBeenCalledWith({
            audience: REACT_APP_AUTH0_AUDIENCE,
            scope: 'test:scope admin:learners',
          });
          expect(logoutSpy).not.toHaveBeenCalled();
        });
        it('should add "as user id" parameter to the request', async () => {
          const request = await requestInterceptor(
            { method: 'get', url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } },
            getAccessTokenSilentlySpy,
            true,
            logoutSpy,
          );
          expect(request.params[AS_USER_ID]).toBe('AsUser|TestId');
        });
      });
      describe('for "non-get" requests', () => {
        it('should not allow access "as user"', async () => {
          const request = await requestInterceptor(
            { method: 'non-get', url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } },
            getAccessTokenSilentlySpy,
            true,
            logoutSpy,
          );
          expect(request.params[AS_USER_ID]).toBeUndefined();
        });
      });
    });
    describe('in "as client" mode', () => {
      beforeEach(() => {
        localStorage.setItem(CLIENT_ID, JSON.stringify({ id: 'Client|TestId' }));
      });
      it('should add "client id" parameter to the request', async () => {
        const request = await requestInterceptor(
          { method: 'any', url: REACT_APP_API_GATEWAY_URL, headers: { scope: 'test:scope' } },
          getAccessTokenSilentlySpy,
          true,
          logoutSpy,
        );
        expect(request.params.clientId).toBe('Client|TestId');
        expect(logoutSpy).not.toHaveBeenCalled();
      });
    });
  });
});
