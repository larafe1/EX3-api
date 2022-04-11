import type { User } from '@/domain/models';

export interface IGetUser {
  find: (username: string) => Promise<User>;
}
