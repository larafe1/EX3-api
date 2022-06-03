import type { Stock, Transaction } from '@/domain/models';

export type StockTransaction = Pick<Stock, 'symbol'> & Omit<Transaction, 'id'>;
