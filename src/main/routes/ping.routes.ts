import { Router, Response } from 'express';

import { HttpHelper } from '@/presentation/helpers';

const pingRoutes = Router();

pingRoutes.get('/ping', (_, res: Response) => {
  const httpResponse = HttpHelper.OK('pong');

  res.status(httpResponse.statusCode).json(httpResponse.body);
});

export { pingRoutes };
