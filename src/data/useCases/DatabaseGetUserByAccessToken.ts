import type { Decrypter } from '@/data/protocols/cryptography';
import type { GetUserByAccessTokenRepository } from '@/data/protocols/database';
import type { GetUserByAccessToken } from '@/domain/useCases';

export class DatabaseGetUserByAccessToken implements GetUserByAccessToken {
  protected readonly decrypter: Decrypter;
  protected readonly getUserByAccessTokenRepository: GetUserByAccessTokenRepository;

  constructor(
    decrypter: Decrypter,
    getUserByAccessTokenRepository: GetUserByAccessTokenRepository
  ) {
    this.decrypter = decrypter;
    this.getUserByAccessTokenRepository = getUserByAccessTokenRepository;
  }

  async get(token: GetUserByAccessToken.Params) {
    let accessToken: string;
    try {
      accessToken = await this.decrypter.decrypt(token);
      console.log(accessToken);
    } catch (err) {
      return null;
    }

    if (accessToken) {
      const userExists =
        await this.getUserByAccessTokenRepository.getByAccessToken(token);
      if (userExists) return userExists;
    }
    return null;
  }
}
