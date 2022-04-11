import { HttpErrorResponse } from '@/presentation/errors';
import type { HttpResponse } from '@/presentation/protocols';

export class HttpHelper {
  static BAD_REQUEST = (err: Error) =>
    new HttpErrorResponse({
      statusCode: 400,
      error: {
        name: 'Bad Request',
        message: err.message
      }
    });

  static FORBIDDEN = (err: Error) =>
    new HttpErrorResponse({
      statusCode: 401,
      error: {
        name: 'Forbidden',
        message: err.message
      }
    });

  static NOT_FOUND = (err: Error) =>
    new HttpErrorResponse({
      statusCode: 404,
      error: {
        name: 'Not Found',
        message: err.message
      }
    });

  static INTERNAL_SERVER_ERROR = (err: Error) =>
    new HttpErrorResponse({
      statusCode: 500,
      error: {
        name: 'Internal Server Error',
        message: err.message
      }
    });

  static OK = <T>(data: T, message?: string): HttpResponse<T> => ({
    statusCode: 200,
    body: data,
    message
  });

  static CREATED = <T>(data: T): HttpResponse<T> => ({
    statusCode: 201,
    body: data,
    message: 'Successfully created'
  });

  static NO_CONTENT = (): HttpResponse<null> => ({
    statusCode: 204
  });
}
