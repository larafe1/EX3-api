import type { Transaction } from '@/domain/models';

export type Stock = {
  symbol: string;
  total_cost: number;
  current_price: number;
  fulfilled_transactions: Transaction[];
};
