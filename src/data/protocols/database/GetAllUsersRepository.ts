import type { User } from '@/domain/models';

export interface GetAllUsersRepository {
  getAll: () => Promise<GetAllUsersRepository.Result>;
}

namespace GetAllUsersRepository {
  export type Result = User[];
}
