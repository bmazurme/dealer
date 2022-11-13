export default class ForbiddenError extends Error {
  statusCode: number;

  constructor(message = 'HTTP 403 Forbidden') {
    super(message);

    this.statusCode = 403;
  }
}
