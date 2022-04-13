import { makeDatabaseAuthentication } from '@/main/factories/useCases';
import { SignInController } from '@/presentation/controllers';

export const makeSignInController = () => {
  const controller = new SignInController(makeDatabaseAuthentication());

  return controller;
};
