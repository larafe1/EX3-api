import type {
  CreateUserRepository,
  GetAllUsersRepository,
  GetUserByUsernameRepository
} from '@/data/protocols/database';
import { prismaClient } from '@/infra/database';

export class UserRepository
  implements
    CreateUserRepository,
    GetAllUsersRepository,
    GetUserByUsernameRepository
{
  async create(data: CreateUserRepository.Params) {
    const userCollection = prismaClient.getConnection().user;

    const user = await userCollection.create({
      data: data
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

  async getAll() {
    const userCollection = prismaClient.getConnection().user;

    const allUsers = await userCollection.findMany();

    return allUsers;
  }
}
