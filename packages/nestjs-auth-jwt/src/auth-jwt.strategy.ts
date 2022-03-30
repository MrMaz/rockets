import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IdentityReferenceInterface } from '@concepta/nestjs-common';
import {
  PassportStrategyFactory,
  VerifyTokenServiceInterface,
} from '@concepta/nestjs-authentication';
import { JwtStrategy, JwtStrategyOptionsInterface } from '@concepta/nestjs-jwt';
import {
  AUTH_JWT_MODULE_SETTINGS_TOKEN,
  AUTH_JWT_MODULE_USER_LOOKUP_SERVICE_TOKEN,
  AUTH_JWT_MODULE_VERIFY_TOKEN_SERVICE_TOKEN,
  AUTH_JWT_STRATEGY_NAME,
} from './auth-jwt.constants';
import { AuthJwtSettingsInterface } from './interfaces/auth-jwt-settings.interface';
import { AuthJwtUserLookupServiceInterface } from './interfaces/auth-jwt-user-lookup-service.interface';
import { AuthJwtPayloadInterface } from './interfaces/auth-jwt-payload.interface';
import { createVerifyTokenCallback } from './utils/create-verify-token-callback.util';

@Injectable()
export class AuthJwtStrategy extends PassportStrategyFactory<JwtStrategy>(
  JwtStrategy,
  AUTH_JWT_STRATEGY_NAME,
) {
  @Inject(AUTH_JWT_MODULE_USER_LOOKUP_SERVICE_TOKEN)
  private userLookupService: AuthJwtUserLookupServiceInterface;

  constructor(
    @Inject(AUTH_JWT_MODULE_SETTINGS_TOKEN)
    settings: AuthJwtSettingsInterface,
    @Inject(AUTH_JWT_MODULE_VERIFY_TOKEN_SERVICE_TOKEN)
    verifyTokenService: VerifyTokenServiceInterface,
  ) {
    const options: JwtStrategyOptionsInterface = {
      verifyToken: createVerifyTokenCallback(verifyTokenService),
      ...settings,
    };

    super(options);
  }

  /**
   * Validate the user based on payload sub
   *
   * @param payload The payload to validate
   */
  async validate(
    payload: AuthJwtPayloadInterface,
  ): Promise<IdentityReferenceInterface> {
    const user = this.userLookupService.bySubject(payload.sub);

    if (user) {
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}
