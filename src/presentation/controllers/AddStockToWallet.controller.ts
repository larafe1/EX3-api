import { InvalidParametersError } from '@/presentation/errors';
import { HttpHelper } from '@/presentation/helpers';
import type { Controller } from '@/presentation/protocols';

export class AddStockToWallet implements Controller {
  protected readonly addStockToWallet: AddStockToWallet;

  constructor(addStockToWallet: AddStockToWallet) {
    this.addStockToWallet = addStockToWallet;
  }

  async handle(req: AddStockToWalletController.Request) {
    try {
      const { symbol, totalCost, fulfilledTransactions } = req;
      const validatedWithoutErrors =
        !!symbol && !!totalCost && !!Object.keys(fulfilledTransactions).length;
      if (!validatedWithoutErrors)
        return HttpHelper.BAD_REQUEST(new InvalidParametersError());

      await this.addStockToWallet.add({
        ...request
      });

      return HttpHelper.OK({ test: 'test' });
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  }
}

export namespace AddStockToWalletController {
  export type Request = {
    symbol: string;
    totalCost: number;
    fulfilledTransactions: Transaction[];
  };

  type Transaction = {
    type: string;
    amount: string | number;
    value: string | number;
    date: Date | string;
  };
}
