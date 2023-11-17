import { green, red, gray, yellowBright } from 'colorette';

export class Logger {
  static async Success(message: string) {
    await console.log(green(message));
  }

  static async Info(message: string) {
    await console.log(yellowBright(message));
  }

  static async Error(message: string) {
    await console.log(red(message));
  }

  static async Debug(message: string) {
    await console.log(gray(message));
  }
}
