import type { GetUserWalletByIdRepository } from '@/data/protocols/database';
import { prismaClient } from '@/infra/database';

export class WalletRepository implements GetUserWalletByIdRepository {
  async getById(userId: GetUserWalletByIdRepository.Params) {
    const walletCollection = prismaClient.getConnection().wallet;

    const wallet = await walletCollection.findFirst({
      where: {
        user_id: userId
      }
    });

    return wallet as GetUserWalletByIdRepository.Result;
  }
}
