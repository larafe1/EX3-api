import type { Request, Response } from 'express';

import type { Controller } from '@/presentation/protocols';

export const expressRouterAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {})
    };

    const httpResponse = await controller.handle(request);

    res.status(httpResponse.statusCode).json({
      ...httpResponse.body,
      message: httpResponse.message
    });
  };
};
