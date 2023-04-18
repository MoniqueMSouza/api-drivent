import { Router } from 'express';
import { getTicketPayment, payTicket } from '@/controllers';
import { authenticateToken, validateBody, validateQuery } from '@/middlewares';
import { PaymentSchema, ticketIdSchema } from '@/schemas';

const paymentsRouter = Router();

paymentsRouter

  .all('*', authenticateToken)
  .get('/', validateQuery(ticketIdSchema), getTicketPayment)
  .post('/process', validateBody(PaymentSchema), payTicket);

export { paymentsRouter };
