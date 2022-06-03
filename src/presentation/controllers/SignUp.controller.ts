import type { Authentication, CreateUser } from '@/domain/useCases';
import {
  MissingParametersError,
  InvalidParametersError
} from '@/presentation/errors';
import { HttpHelper } from '@/presentation/helpers';
import type { Controller } from '@/presentation/protocols';

export class SignUpController implements Controller {
  protected readonly authentication: Authentication;
  protected readonly createUser: CreateUser;

  constructor(authentication: Authentication, createUser: CreateUser) {
    this.authentication = authentication;
    this.createUser = createUser;
  }

  async handle(req: SignUpController.Request) {
    try {
      const { username, email, password } = req;
      const validatedWithoutErrors = !!username && !!email && !!password;
      if (!validatedWithoutErrors)
        return HttpHelper.BAD_REQUEST(new MissingParametersError());

      const isValid = await this.createUser.create({
        username,
        email,
        password
      });
      if (!isValid)
        return HttpHelper.FORBIDDEN(
          new InvalidParametersError(
            'Provided an username that is already in use'
          )
        );

      const authenticationModel = await this.authentication.auth({
        username,
        password
      });

      return HttpHelper.OK(authenticationModel);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  }
}

export namespace SignUpController {
  export type Request = {
    username: string;
    email: string;
    password: string;
  };
}
