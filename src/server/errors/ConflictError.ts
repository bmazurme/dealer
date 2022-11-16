export default class ConflictError extends Error {
  statusCode: number;

  constructor(message = 'HTTP 409 Conflict') {
    super(message);

    this.statusCode = 409;
  }
}
