export interface TransactionCreateData {
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: Date;
}

export interface TransactionsRepository {
  create: (data: TransactionCreateData) => Promise<void>;
}