export interface CreateUser {
  create: (user: CreateUser.Request) => Promise<CreateUser.Result>;
}

export namespace CreateUser {
  export type Request = {
    username: string;
    email: string;
    password: string;
  };

  export type Result = boolean;
}
