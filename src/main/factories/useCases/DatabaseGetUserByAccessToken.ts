import { DatabaseGetUserByAccessToken } from '@/data/useCases';
import { JwtAdapter } from '@/infra/cryptography';
import { UserRepository } from '@/infra/database/repositories';
import { Env } from '@/main/config';

export const makeDatabaseGetUserByAccessToken = () => {
  const jwtAdapter = new JwtAdapter(Env.JWT_SECRET);
  const userRepository = new UserRepository();

  return new DatabaseGetUserByAccessToken(jwtAdapter, userRepository);
};
