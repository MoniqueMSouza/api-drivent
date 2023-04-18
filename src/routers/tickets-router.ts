import { Router } from 'express';
import { getTicketsTypes, createTickets, getUsersTickets } from '@/controllers';
import { authenticateToken, validateBody } from '@/middlewares';
import { TicketSchema } from '@/schemas';

const ticketsRouter = Router();
ticketsRouter
  .all('*', authenticateToken)
  .get('/types', getTicketsTypes)
  .get('/', getUsersTickets)
  .post('/', validateBody(TicketSchema), createTickets);

export { ticketsRouter };
