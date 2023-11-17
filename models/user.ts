import { Logger } from '../utils/logger';

export class User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string = '', lastName: string = '', email: string = '') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    Logger.Success('User created successfully');
    Logger.Info(`Firstname: ${this.firstName}\nLastname: ${this.lastName}\nEmail: ${this.email}`);
  }
}
