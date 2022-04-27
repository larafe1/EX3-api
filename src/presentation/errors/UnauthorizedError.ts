export class UnauthorizedError extends Error {
  constructor() {
    super('User is not authorized to perform this action');
    this.name = 'UnauthorizedError';
  }
}
