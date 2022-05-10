import { TransactionsRepository } from "../repositories/transactions-repository";

interface SubmitTransactionUseCaseRequest {
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: Date;
}

export class SubmitTransactionUseCase {

  constructor(
    private transactionsRepository: TransactionsRepository
  ) {}

  async execute(request: SubmitTransactionUseCaseRequest) {
    const { title, amount, category, type, createdAt } = request;

    if (!title) {
      throw new Error('Title is required.')
    }

    if (!amount) {
      throw new Error('Amount is required.')
    }

    if (!category) {
      throw new Error('Category is required.')
    }

    if (!type) {
      throw new Error('Type is required.')
    }

    await this.transactionsRepository.create({
      title,
      amount,
      category,
      type,
      createdAt
    })
  }
}