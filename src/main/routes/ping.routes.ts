import { Router, Response } from 'express';

import { authentication } from '@/main/middlewares';
import { HttpHelper } from '@/presentation/helpers';

const pingRoutes = Router();

pingRoutes.get('/ping', authentication, (_, res: Response) => {
  const httpResponse = HttpHelper.OK('pong');

  res.status(httpResponse.statusCode).json(httpResponse.body);
});

export { pingRoutes };
