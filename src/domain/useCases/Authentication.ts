import type { User } from '@/domain/models';

export interface Authentication {
  auth: (
    authenticationParams: Authentication.Params
  ) => Promise<Authentication.Result>;
}

export namespace Authentication {
  export type Params = {
    username: string;
    password: string;
  };

  export type Result = {
    token: string;
    user: Omit<User, 'password'>;
  } | null;
}
