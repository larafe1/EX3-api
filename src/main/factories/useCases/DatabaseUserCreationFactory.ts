import { DatabaseUserCreation } from '@/data/useCases';
import { BcryptAdapter } from '@/infra/cryptography';
import { UserRepository } from '@/infra/database/repositories';

export const makeDatabaseUserCreation = () => {
  const salt = 8;
  const bcryptAdapter = new BcryptAdapter(salt);
  const userRepository = new UserRepository();

  return new DatabaseUserCreation(bcryptAdapter, userRepository);
};
