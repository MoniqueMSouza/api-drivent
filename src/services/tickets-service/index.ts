import { TicketType, Ticket } from '@prisma/client';
import ticketRepository from '@/repositories/tickets-repository';
import { notFoundError } from '@/errors';
import enrollmentRepository from '@/repositories/enrollment-repository';

async function allTickets(): Promise<TicketType[]> {
  const ticket = await ticketRepository.findMany();

  return ticket;
}

async function createNewTicket(userId: number, ticketTypeId: number): Promise<TicketType[]> {
  const enrollment = await ticketRepository.findUnique(userId);

  if (!enrollment) {
    throw notFoundError();
  }

  const newTicket = await ticketRepository.createNewTicket(enrollment.id, ticketTypeId);
  return;
}

async function getTickets(userId: number): Promise<Ticket> {
  const ticket = await ticketRepository.findUnique(userId);

  if (!ticket || !userId) {
    throw notFoundError();
  }

  return ticket;
}

const ticketsService = {
  allTickets,
  createNewTicket,
  getTickets,
};

export default ticketsService;
