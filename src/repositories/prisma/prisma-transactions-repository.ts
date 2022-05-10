import { prisma } from '../../prisma';
import { TransactionCreateData, TransactionsRepository } from '../transactions-repository';

export class PrismaTransactionsRepository implements TransactionsRepository {
  async create({ title, amount, category, type }: TransactionCreateData) {
    await prisma.transaction.create({ 
      data: {
        title,
        amount, 
        category, 
        type
      }
    })
  }
}