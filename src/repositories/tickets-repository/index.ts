import { Ticket, TicketType } from '@prisma/client';
import { prisma } from '@/config';

async function findMany() {
  return prisma.ticketType.findMany();
}

async function findUnique(userId: number) {
  return prisma.ticket.findUnique({
    where: {
      id: userId,
    },
  });
}
async function typeById(id: number): Promise<TicketType> {
  return prisma.ticketType.findUnique({
    where: {
      id,
    },
  });
}

async function createNewTicket(enrollmentId: number, ticketTypeId: number) {
  return prisma.ticket.create({
    data: {
      enrollmentId,
      ticketTypeId,
      status: 'RESERVED' || 'PAID',
    },
    include: {
      TicketType: true,
    },
  });
}
async function ticketById(id: number): Promise<Ticket> {
  return prisma.ticket.findUnique({
    where: {
      id,
    },
  });
}
async function updateTicket(id: number) {
  return prisma.ticket.update({
    where: {
      id,
    },
    data: {
      status: 'PAID',
    },
  });
}

const ticketRepository = {
  findMany,
  findUnique,
  createNewTicket,
  ticketById,
  typeById,
  updateTicket,
};

export default ticketRepository;
