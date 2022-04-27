import type { HttpResponse } from '@/presentation/protocols';

export interface Middleware<T = any> {
  handle: (req: T) => Promise<HttpResponse<T>>;
}
