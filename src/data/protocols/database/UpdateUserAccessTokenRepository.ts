export interface UpdateUserAccessTokenRepository {
  updateAccessToken: (
    data: UpdateUserAccessTokenRepository.Params
  ) => Promise<void>;
}

export namespace UpdateUserAccessTokenRepository {
  export type Params = {
    id: string;
    token: string;
  };
}
