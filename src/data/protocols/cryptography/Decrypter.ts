export interface Decrypter {
  decrypt: (cypherText: string) => Promise<string>;
}
