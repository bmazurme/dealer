export default class UnauthorizedError extends Error {
  statusCode: number;

  constructor(message = 'HTTP 401 Unauthorized') {
    super(message);

    this.statusCode = 401;
  }
}
