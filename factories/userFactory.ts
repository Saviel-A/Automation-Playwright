import { User } from '../models/user';
import { generateRandomNumbers } from '../utils/generateRandomNumbers';
import { Logger } from '../utils/logger';

interface Factory {
  user: User;
  getUser: () => Promise<User>;
}

export const userFactory: Factory = {
  user: {
    firstName: 'testa',
    lastName: 'testu',
    email: '',
  },

  async getUser(): Promise<User> {
    this.user.email = `test${await generateRandomNumbers()}@mailinator.com`;
    Logger.Info('---------------------------------');
    Logger.Success('User created successfully');
    Logger.Info(`Firstname: ${this.user.firstName}`);
    Logger.Info(`Lastname: ${this.user.lastName}`);
    Logger.Info(`Email: ${this.user.email}`);
    Logger.Info('---------------------------------');
    return this.user;
  },
};
