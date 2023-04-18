import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import paymentsService from '@/services/payments-service';
import { CardData } from '@/protocols';

export async function getTicketPayment(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { ticketId } = req.query as { ticketId: string };
  const { userId } = req;

  try {
    const payment = await paymentsService.getPayment(userId, parseInt(ticketId));
    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({ error });
  }
}

export async function payTicket(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { ticketId } = req.body as { ticketId: number };
  const { cardData } = req.body as { cardData: CardData };
  const { userId } = req;

  try {
    const payment = await paymentsService.processPayment(userId, ticketId, cardData);
    return res.status(httpStatus.OK).send(payment);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({ error });
  }
}
