import type { HttpErrorResponse } from '@/presentation/errors';

import type { HttpResponse } from './HttpResponse';

export interface Controller<T = any> {
  handle: (req: T) => Promise<HttpResponse<any | HttpErrorResponse>>;
}
