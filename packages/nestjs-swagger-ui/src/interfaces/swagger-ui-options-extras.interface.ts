import { DynamicModule } from '@nestjs/common';

export interface SwaggerUiOptionsExtrasInterface
  extends Pick<DynamicModule, 'global'> {}
