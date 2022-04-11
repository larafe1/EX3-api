import type { HttpResponse } from '@/presentation/protocols';

export class HttpErrorResponse implements HttpResponse<any> {
  error: { name: string; message?: string };
  statusCode: number;
  message?: string | undefined;
  body?: any;
  total?: number | undefined;
  info?: any;

  constructor(data: {
    error: { name: string; message?: string };
    statusCode: number;
  }) {
    this.error = data.error;
    this.statusCode = data.statusCode;
  }
}
