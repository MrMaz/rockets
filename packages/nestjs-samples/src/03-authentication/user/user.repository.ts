import { User } from '@rockts-org/nestjs-user';
import {
  EntityRepository,
  FindConditions,
  FindOneOptions,
  ObjectID,
  Repository,
} from 'typeorm';

@EntityRepository(User)
export class TestUserRepository extends Repository<User> {
  /**
   * Fake user "database"
   */
  private users: User[] = [
    {
      id: '1',
      username: 'first_user',
      // Encrypted for AS12378
      password: '$2b$10$9y97gOLiusyKnzu7LRdMmOCVpp/xwddaa8M6KtgenvUDao5I.8mJS',
      salt: '$2b$10$9y97gOLiusyKnzu7LRdMmO',
    },
    {
      id: '2',
      username: 'second_user',
      // Encrypted for AS12378
      password: '$2b$10$9y97gOLiusyKnzu7LRdMmOCVpp/xwddaa8M6KtgenvUDao5I.8mJS',
      salt: '$2b$10$9y97gOLiusyKnzu7LRdMmO',
    },
  ];

  async findOne(
    optionsOrConditions?:
      | string
      | number
      | Date
      | ObjectID
      | FindOneOptions<User>
      | FindConditions<User>,
  ): Promise<User | undefined> {
    return this.users.find(
      (user) => user.username === optionsOrConditions['username'],
    );
  }
}