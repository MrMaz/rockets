import { Exclude, Expose } from 'class-transformer';
import { IsJWT } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AuthenticationRefreshInterface } from '@concepta/ts-common';

@Exclude()
export class AuthRefreshDto implements AuthenticationRefreshInterface {
  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'JWT access token to use for request authorization.',
  })
  @IsJWT()
  refreshToken = '';
}
