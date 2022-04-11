export interface HashComparer {
  compare: (plainText: string, digest: string) => Promise<boolean>;
}
