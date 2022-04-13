import type { Authentication } from '@/domain/useCases';
import { HttpHelper } from '@/presentation/helpers';
import type { Controller } from '@/presentation/protocols';

export class SignInController implements Controller {
  protected readonly authentication: Authentication;

  constructor(authentication: Authentication) {
    this.authentication = authentication;
  }

  async handle(req: SignInController.Request) {
    try {
      const validatedWithoutErrors = !!req.username || !!req.password;
      if (!validatedWithoutErrors)
        return HttpHelper.BAD_REQUEST({
          message: 'Missing required params'
        } as Error);

      const authenticationModel = await this.authentication.auth(req);
      if (!authenticationModel) return HttpHelper.FORBIDDEN();

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
