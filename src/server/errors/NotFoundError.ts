export default class NotFoundError extends Error {
  statusCode: number;

  constructor(message = 'HTTP 404 Not Found') {
    super(message);

    this.statusCode = 404;
  }
}
