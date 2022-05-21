import type { GetUserByAccessToken } from '@/domain/useCases';
import { UnauthorizedError } from '@/presentation/errors';
import { HttpHelper } from '@/presentation/helpers';
import type { Middleware } from '@/presentation/protocols';

export class AuthenticationMiddleware implements Middleware {
  protected readonly getUserByAccessToken: GetUserByAccessToken;

  constructor(getUserByAccessToken: GetUserByAccessToken) {
    this.getUserByAccessToken = getUserByAccessToken;
  }

  async handle(req: AuthenticationMiddleware.Request) {
    try {
      const { token } = req;
      if (token) {
        const userExists = await this.getUserByAccessToken.get(token);
        if (userExists) return HttpHelper.OK({ userId: userExists.id });
      }
      return HttpHelper.FORBIDDEN(new UnauthorizedError());
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  }
}

export namespace AuthenticationMiddleware {
  export type Request = {
    token?: string;
  };
}
