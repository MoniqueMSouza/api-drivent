import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import ticketsService from '@/services/tickets-service';
import { AuthenticatedRequest } from '@/middlewares';

export async function getTicketsTypes(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const ticketsTypes = await ticketsService.allTickets();

    return res.status(httpStatus.OK).send(ticketsTypes);
  } catch (error) {
    next(error);
  }
}

export async function createTickets(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req as { userId: number };
  const { ticketTypeId } = req.body as { ticketTypeId: number };

  try {
    const ticket = await ticketsService.createNewTicket(userId, ticketTypeId);
    return res.status(httpStatus.CREATED).send(ticket);
  } catch (error) {
    if (error.name === 'NotFoundError') {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    next(error);
  }
}

export async function getUsersTickets(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req as { userId: number };
  try {
    const tickets = await ticketsService.getTickets(userId);

    return res.status(httpStatus.OK).send(tickets);
    return;
    6;
  } catch (error) {
    return;
  }
}
