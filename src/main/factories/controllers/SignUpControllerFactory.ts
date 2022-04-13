import {
  makeDatabaseAuthentication,
  makeDatabaseUserCreation
} from '@/main/factories/useCases';
import { SignUpController } from '@/presentation/controllers';

export const makeSignUpController = () => {
  const controller = new SignUpController(
    makeDatabaseAuthentication(),
    makeDatabaseUserCreation()
  );

  return controller;
};
