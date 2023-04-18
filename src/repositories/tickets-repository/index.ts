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

const ticketRepository = {
  findMany,
  findUnique,
  createNewTicket,
};

export default ticketRepository;
