export interface GetUserByAccessToken {
  get: (
    token: GetUserByAccessToken.Params
  ) => Promise<GetUserByAccessToken.Result>;
}

export namespace GetUserByAccessToken {
  export type Params = string;

  export type Result = {
    id: string;
  } | null;
}
