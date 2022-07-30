import { InvitationInterface } from './invitation.interface';

export interface InvitationCreatableInterface
  extends Pick<InvitationInterface, 'category'> {
  email: string;
}
