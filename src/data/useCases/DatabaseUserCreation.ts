import type { Hasher } from '@/data/protocols/cryptography';
import type { CreateUser } from '@/domain/useCases';
import { UserRepository } from '@/infra/database/repositories';

export class DatabaseUserCreation implements CreateUser {
  protected readonly hasher: Hasher;
  protected readonly userRepository: UserRepository;

  constructor(hasher: Hasher, userRepository: UserRepository) {
    this.hasher = hasher;
    this.userRepository = userRepository;
  }

  async create(userData: CreateUser.Request) {
    const userExists = await this.userRepository.getByUsername(
      userData.username
    );
    let isValid = false;
    if (userExists) return isValid;

    const hashedPassword = await this.hasher.hash(userData.password);
    isValid = !!(await this.userRepository.create({
      ...userData,
      password: hashedPassword
    }));
    return isValid;
  }
}
