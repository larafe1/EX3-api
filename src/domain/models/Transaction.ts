type TransactionType = 'buy' | 'sell';

export type Transaction = {
  id: string;
  type: TransactionType;
  amount: string | number;
  value: string | number;
  date: Date | string;
};
