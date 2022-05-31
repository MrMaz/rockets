import { format } from 'util';
import { ExceptionInterface } from '@concepta/ts-core';

export class FederatedUserLookupException
  extends Error
  implements ExceptionInterface
{
  errorCode = 'FEDERATED_USER_LOOKUP_ERROR';

  context: {
    entityName: string;
    id: string;
  };

  constructor(
    entityName: string,
    id: string,
    message = 'Error while trying find user $s',
  ) {
    super(format(message, id));
    this.context = {
      entityName,
      id,
    };
  }
}
