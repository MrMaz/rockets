import { AccessControlUpdateOne } from './access-control-update-one.decorator';

/**
 * Update one resource grant shortcut
 *
 * @param string resource The grant resource.
 */
export const AccessControlReplaceOne = (resource: string) =>
  AccessControlUpdateOne(resource);
