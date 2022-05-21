import type {
  CreateUserRepository,
  GetUserByUsernameRepository,
  GetUserByAccessTokenRepository,
  GetAllUsersRepository,
  UpdateUserAccessTokenRepository
} from '@/data/protocols/database';
import { prismaClient } from '@/infra/database';

export class UserRepository
  implements
    CreateUserRepository,
    GetUserByUsernameRepository,
    GetUserByAccessTokenRepository,
    GetAllUsersRepository,
    UpdateUserAccessTokenRepository
{
  async create(data: CreateUserRepository.Params) {
    const userCollection = prismaClient.getConnection().user;

    const user = await userCollection.create({
      data: {
        ...data,
        access_token: '',
        wallet: {
          create: {
            current_balance: 0
          }
        }
      }
    });

    return user;
  }

  async getByUsername(username: GetUserByUsernameRepository.Params) {
    const userCollection = prismaClient.getConnection().user;

    const user = await userCollection.findFirst({
      where: {
        username: username
      }
    });

    return user;
  }

  async getByAccessToken(token: GetUserByAccessTokenRepository.Params) {
    const userCollection = prismaClient.getConnection().user;

    const user = await userCollection.findFirst({
      where: {
        access_token: token
      }
    });

    return user;
  }

  async getAll() {
    const userCollection = prismaClient.getConnection().user;

    const allUsers = await userCollection.findMany();

    return allUsers;
  }

  async updateAccessToken({
    id,
    token
  }: UpdateUserAccessTokenRepository.Params) {
    const userCollection = prismaClient.getConnection().user;

    await userCollection.update({
      where: {
        id: id
      },
      data: {
        access_token: token
      }
    });
  }
}
