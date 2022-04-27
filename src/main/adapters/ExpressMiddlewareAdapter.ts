import type { Request, Response, NextFunction } from 'express';

import type { Middleware } from '@/presentation/protocols';

export const expressMiddlewareAdapter = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      token: req.headers.authorization?.split(' ')[1],
      ...(req.headers || {})
    };

    const httpResponse = await middleware.handle(request);
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        ...httpResponse.body,
        message: httpResponse.body.message as string
      });
    }
  };
};
