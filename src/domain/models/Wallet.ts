import type { Stock } from '@/domain/models';

export type Wallet = {
  items: Stock[];
  current_balance: number;
};
