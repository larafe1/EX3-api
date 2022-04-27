import type { Encrypter, HashComparer } from '@/data/protocols/cryptography';
import type {
  GetUserByUsernameRepository,
  UpdateUserAccessTokenRepository
} from '@/data/protocols/database';
import type { Authentication } from '@/domain/useCases';

export class DatabaseUserAuthentication implements Authentication {
  protected readonly getUserByUsernameRepository: GetUserByUsernameRepository;
  protected readonly hashComparer: HashComparer;
  protected readonly encrypter: Encrypter;
  protected readonly updateUserAccessTokenRepository: UpdateUserAccessTokenRepository;

  constructor(
    getUserByUsernameRepository: GetUserByUsernameRepository,
    hashComparer: HashComparer,
    encrypter: Encrypter,
    updateUserAccessTokenRepository: UpdateUserAccessTokenRepository
  ) {
    this.getUserByUsernameRepository = getUserByUsernameRepository;
    this.hashComparer = hashComparer;
    this.encrypter = encrypter;
    this.updateUserAccessTokenRepository = updateUserAccessTokenRepository;
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
        await this.updateUserAccessTokenRepository.updateAccessToken({
          id: userExists.id,
          token
        });
        const user = (({ password, access_token, updated_at, ...rest }) =>
          rest)(userExists);

        return {
          token: token,
          user
        };
      }
    }
    return null;
  }
}
