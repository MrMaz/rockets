import { PrimaryGeneratedColumn } from 'typeorm';
import { AuditInterface, ReferenceIdInterface } from '@concepta/ts-core';
import { AuditPostgresEntity } from '../audit/audit-postgres.entity';

export abstract class CommonPostgresEntity
  extends AuditPostgresEntity
  implements ReferenceIdInterface, AuditInterface
{
  @PrimaryGeneratedColumn('uuid')
  id!: string;
}
