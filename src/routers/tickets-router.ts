import { Router } from 'express';
import { getTicketsTypes, createTickets, getUsersTickets } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.get('/tickets/types', getTicketsTypes);
ticketsRouter.post('/tickets', createTickets);
ticketsRouter.get('/tickets', getUsersTickets);

export { ticketsRouter };
