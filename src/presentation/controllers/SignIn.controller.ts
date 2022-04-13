import type { Authentication } from '@/domain/useCases';
import { InvalidParametersError } from '@/presentation/errors';
import { HttpHelper } from '@/presentation/helpers';
import type { Controller } from '@/presentation/protocols';

export class SignInController implements Controller {
  protected readonly authentication: Authentication;

  constructor(authentication: Authentication) {
    this.authentication = authentication;
  }

  async handle(req: SignInController.Request) {
    try {
      const { username, password } = req;
      const validatedWithoutErrors = !!username && !!password;
      if (!validatedWithoutErrors)
        return HttpHelper.BAD_REQUEST(new InvalidParametersError());

      const authenticationModel = await this.authentication.auth(req);
      if (!authenticationModel) return HttpHelper.UNAUTHORIZED();

      return HttpHelper.OK(authenticationModel);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  }
}

namespace SignInController {
  export type Request = {
    username: string;
    password: string;
  };
}
