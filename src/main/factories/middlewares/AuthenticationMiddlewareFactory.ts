import { makeDatabaseGetUserByAccessToken } from '@/main/factories/useCases';
import { AuthenticationMiddleware } from '@/presentation/middlewares';

export const makeAuthenticationMiddleware = () => {
  return new AuthenticationMiddleware(makeDatabaseGetUserByAccessToken());
};
