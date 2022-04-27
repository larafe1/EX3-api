import { expressMiddlewareAdapter } from '@/main/adapters';
import { makeAuthenticationMiddleware } from '@/main/factories/middlewares';

export const authentication = expressMiddlewareAdapter(
  makeAuthenticationMiddleware()
);
