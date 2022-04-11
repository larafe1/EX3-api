import type { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { prismaClient } from '@/infra/database';
import { Env } from '@/main/config';
import { HttpErrorResponse } from '@/presentation/errors';
import { HttpHelper } from '@/presentation/helpers';

export const verifyAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      throw HttpHelper.FORBIDDEN({
        message: 'Missing authorization header'
      } as Error);

    const [_, token] = authorization.split(' ');
    const { sub }: any = verify(token, Env.JWT_SECRET, (err, res) => {
      if (err) throw HttpHelper.FORBIDDEN(new Error('Invalid token'));
      return res;
    });
    const userId = sub as string;
    const userSchema = prismaClient.getConnection().user;

    const userExists = await userSchema.findFirst({
      where: {
        id: userId
      }
    });
    if (!userExists)
      throw HttpHelper.NOT_FOUND(new Error('User does not exist'));

    next();
  } catch (err) {
    const { statusCode, message } = err as HttpErrorResponse;
    return res.status(statusCode).json({ Error: message });
  }
};
