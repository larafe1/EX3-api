export class UsernameInUseError extends Error {
  constructor() {
    super('The received username is already in use');
    this.name = 'UsernameInUseError';
  }
}
