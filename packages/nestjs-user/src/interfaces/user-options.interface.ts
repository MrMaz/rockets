import { OptionsInterface } from '@rockts-org/nestjs-common';
import { UserServiceInterface } from './user-service.interface';
import { UserSettingsInterface } from './user-settings.interface';

export interface UserOptionsInterface extends OptionsInterface {
  settings?: UserSettingsInterface;
  userService?: UserServiceInterface;
}
