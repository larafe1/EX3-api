import { UserRepository } from '@/infra/database/repositories';
import { HttpHelper } from '@/presentation/helpers';
import type { Controller } from '@/presentation/protocols';

type AuthenticateUserRequest = {
  username: string;
  password: string;
};

export class AuthenticateUserController implements Controller {
  async handle(req: AuthenticateUserRequest) {
    const { username, password } = req;
    if (!username || !password)
      return HttpHelper.BAD_REQUEST(new Error('Missing required data'));

    const userRepository = new UserRepository();
    const user = userRepository.findByUsername(username);

    return HttpHelper.OK(user);
  }
}
