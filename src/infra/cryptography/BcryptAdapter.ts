import bcrypt from 'bcrypt';

import type { Hasher, HashComparer } from '@/data/protocols/cryptography';

export class BcryptAdapter implements Hasher, HashComparer {
  readonly salt: number;

  constructor(salt: number) {
    this.salt = salt;
  }

  async hash(plainText: string) {
    return bcrypt.hash(plainText, this.salt);
  }

  async compare(plainText: string, digest: string) {
    return bcrypt.compare(plainText, digest);
  }
}
