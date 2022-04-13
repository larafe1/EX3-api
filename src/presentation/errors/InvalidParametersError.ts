export class InvalidParametersError extends Error {
  constructor() {
    super('One or more invalid parameters was given');
    this.name = 'InvalidParametersError';
  }
}
