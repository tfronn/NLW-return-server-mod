import { prisma } from '../../prisma';
import { TransactionCreateData, TransactionsRepository } from '../transactions-repository';

export class PrismaTransactionsRepository implements TransactionsRepository {
  async create({ title, amount, category, type, createdAt }: TransactionCreateData) {
    await prisma.transaction.create({ 
      data: {
        title,
        amount, 
        category, 
        type,
        createdAt
      }
    })
  }
}