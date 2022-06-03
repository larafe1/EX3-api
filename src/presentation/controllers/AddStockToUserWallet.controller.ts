import type { StockTransaction, Stock } from '@/domain/models';
import type { GetUserWallet, AddStockToUserWallet } from '@/domain/useCases';
import { InvalidParametersError } from '@/presentation/errors';
import { HttpHelper } from '@/presentation/helpers';
import type { Controller } from '@/presentation/protocols';

export class AddStockToUserWalletController implements Controller {
  protected readonly getUserWallet: GetUserWallet;
  protected readonly addStockToUserWallet: AddStockToUserWallet;

  constructor(
    getUserWallet: GetUserWallet,
    addStockToUserWallet: AddStockToUserWallet
  ) {
    this.getUserWallet = getUserWallet;
    this.addStockToUserWallet = addStockToUserWallet;
  }

  async handle(req: AddStockToUserWalletController.Request) {
    try {
      const { userId, stockTransactionDetails } = req;
      const wallet = await this.getUserWallet.get(userId);
      if (!wallet) return HttpHelper.NO_CONTENT();

      const isValid = true; // call the ApiUseCase
      if (!isValid)
        return HttpHelper.BAD_REQUEST(
          new InvalidParametersError('Provided an invalid stock')
        );

      const addedStock = await this.addStockToUserWallet.add({
        stockTransactionDetails,
        wallet
      });

      const stockModel: Stock = {
        ...addedStock,
        current_price: 5
      };

      return HttpHelper.OK(stockModel);
    } catch (err) {
      return HttpHelper.INTERNAL_SERVER_ERROR(err as Error);
    }
  }
}

export namespace AddStockToUserWalletController {
  export type Request = {
    userId: string;
    stockTransactionDetails: StockTransaction;
  };
}
