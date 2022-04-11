import jwt from 'jsonwebtoken';

import type { Encrypter, Decrypter } from '@/data/protocols/cryptography';
import { Env } from '@/main/config';

export class JwtAdapter implements Encrypter, Decrypter {
  readonly secret = Env.JWT_SECRET;

  constructor(secret: string) {
    this.secret = secret;
  }

  async encrypt(plainText: string) {
    return jwt.sign({ id: plainText }, this.secret);
  }

  async decrypt(cypherText: string) {
    return jwt.verify(cypherText, this.secret) as string;
  }
}
