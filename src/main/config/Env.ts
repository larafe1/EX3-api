import { config } from 'dotenv';

config();

export const Env = {
  PORT: process.env.PORT || '8080',
  JWT_SECRET: process.env.JWT_SECRET || 'c13d4378951a6b155cd4a002a9d18ee0'
};
