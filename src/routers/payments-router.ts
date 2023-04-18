import { Router } from 'express';
import { getTicketPayment, payTicket } from '@/controllers';

const paymentsRouter = Router();

paymentsRouter.get('/payments?ticketId=1', getTicketPayment);
paymentsRouter.post('/payments/process', payTicket);

export { paymentsRouter };
