import type { GetUserWallet } from '@/domain/useCases';
import { HttpHelper } from '@/presentation/helpers';
import type { Controller } from '@/presentation/protocols';

export class GetUserWalletController implements Controller {
  protected readonly getUserWallet: GetUserWallet;

  constructor(getUserWallet: GetUserWallet) {
    this.getUserWallet = getUserWallet;
  }

  async handle(req: GetUserWalletController.Request) {
    try {
      const wallet = await this.getUserWallet.get(req.userId);
      if (!wallet) return HttpHelper.NO_CONTENT();

      return HttpHelper.OK(wallet);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  }
}

export namespace GetUserWalletController {
  export type Request = {
    userId: string;
  };
}
