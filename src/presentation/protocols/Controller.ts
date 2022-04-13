import type { HttpResponse } from '@/presentation/protocols';

export interface Controller<T = any> {
  handle: (req: T) => Promise<HttpResponse<T>>;
}
