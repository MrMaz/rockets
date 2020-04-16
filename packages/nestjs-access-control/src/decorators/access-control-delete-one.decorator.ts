import {AccessControlGrant} from './access-control-grant.decorator';
import {AccessControlFilterCallback} from '../interfaces/access-control-filter-option.interface';
import {applyDecorators} from '@nestjs/common';
import {AccessControlFilter} from './access-control-filter.decorator';
import {AccessControlGrantResource} from '../interfaces/access-control-grant-option.interface';
import {AccessControlAction} from '../enums/access-control-action.enum';
import {AccessControlFilterType} from '../enums/access-control-filter-type.enum';

/**
 * Delete one resource filter shortcut
 */
export const AccessControlDeleteOne = (
  resource: AccessControlGrantResource,
  paramFilter?: AccessControlFilterCallback
) => {
  const acFilter = AccessControlGrant({
    resource: resource,
    action: AccessControlAction.DELETE,
  });

  if (paramFilter) {
    return applyDecorators(
      acFilter,
      AccessControlFilter({
        type: AccessControlFilterType.PATH,
        filter: paramFilter,
      })
    );
  } else {
    return acFilter;
  }
};
