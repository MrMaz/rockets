import { Module } from '@nestjs/common';
import { AuthLocalModule } from '@concepta/nestjs-auth-local';
import { AuthRefreshModule } from '@concepta/nestjs-auth-refresh';
import { AuthJwtModule } from '@concepta/nestjs-auth-jwt';
import { AuthenticationModule } from '@concepta/nestjs-authentication';
import { UserModule } from '@concepta/nestjs-user';
import { JwtModule } from '@concepta/nestjs-jwt';
import { PasswordModule } from '@concepta/nestjs-password';
import { CrudModule } from '@concepta/nestjs-crud';
import { CustomUserController } from './user/user.controller';

@Module({
  imports: [
    AuthLocalModule.register(),
    AuthJwtModule.register(),
    AuthRefreshModule.register(),
    AuthenticationModule.register(),
    JwtModule.register(),
    PasswordModule.register(),
    CrudModule.register(),
    UserModule.register(),
  ],
  controllers: [CustomUserController],
})
export class AppModule {}
