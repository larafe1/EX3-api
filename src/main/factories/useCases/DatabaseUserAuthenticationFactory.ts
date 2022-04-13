import { DatabaseUserAuthentication } from '@/data/useCases';
import { BcryptAdapter, JwtAdapter } from '@/infra/cryptography';
import { UserRepository } from '@/infra/database/repositories';
import { Env } from '@/main/config';

export const makeDatabaseAuthentication = () => {
  const salt = 8;
  const bcryptAdapter = new BcryptAdapter(salt);
  const jwtAdapter = new JwtAdapter(Env.JWT_SECRET);
  const userRepository = new UserRepository();

  return new DatabaseUserAuthentication(
    userRepository,
    bcryptAdapter,
    jwtAdapter
  );
};
