import type { Encrypter, HashComparer } from '@/data/protocols/cryptography';
import type { GetUserByUsernameRepository } from '@/data/protocols/database';
import type { Authentication } from '@/domain/useCases';

export class DatabaseUserAuthentication implements Authentication {
  protected readonly getUserByUsernameRepository: GetUserByUsernameRepository;
  protected readonly hashComparer: HashComparer;
  protected readonly encrypter: Encrypter;

  constructor(
    getUserByUsernameRepository: GetUserByUsernameRepository,
    hashComparer: HashComparer,
    encrypter: Encrypter
  ) {
    this.getUserByUsernameRepository = getUserByUsernameRepository;
    this.hashComparer = hashComparer;
    this.encrypter = encrypter;
  }

  async auth(authenticationParams: Authentication.Params) {
    const userExists = await this.getUserByUsernameRepository.getByUsername(
      authenticationParams.username
    );
    if (userExists) {
      const isValid = await this.hashComparer.compare(
        authenticationParams.password,
        userExists.password
      );
      if (isValid) {
        const token = await this.encrypter.encrypt(userExists.id);
        const user = (({ password, ...userExists }) => userExists)(userExists);

        return {
          token: token,
          user: user
        };
      }
    }
    return null;
  }
}
