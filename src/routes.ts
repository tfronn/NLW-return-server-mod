import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { PrismaTransactionsRepository } from './repositories/prisma/prisma-transactions-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { SubmitTransactionUseCase } from './use-cases/submit-transaction-use-case'
export const routes = express.Router()

routes.post('/transactions', async (req, res) => {
  const { title, amount, category, type } = req.body


  try {
  const prismaTransactionsRepository = new PrismaTransactionsRepository()
  const submitTransactionUseCase = new SubmitTransactionUseCase(prismaTransactionsRepository)

  await submitTransactionUseCase.execute({
    title,
    amount,
    category,
    type
  })

    return res.status(201).send();
  } catch(err) {
    console.error(err)

    return res.status(500).send()
  }
})


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
    )

  await submitFeedbackUseCase.execute({
    type,
    comment, 
    screenshot,
  })
    return res.status(201).send();
  } catch(err) {
    console.error(err);
 
  return res.status(500).send(); 
}
})