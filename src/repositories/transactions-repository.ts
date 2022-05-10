export interface TransactionCreateData {
  title: string;
  amount: number;
  category: string;
  type: string;
}

export interface TransactionsRepository {
  create: (data: TransactionCreateData) => Promise<void>;
}