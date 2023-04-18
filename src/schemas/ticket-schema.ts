import Joi from 'joi';
import { ticketTypeIdInput } from '@/services';

export const TicketSchema = Joi.object<ticketTypeIdInput>({
  ticketTypeId: Joi.number().required(),
});
