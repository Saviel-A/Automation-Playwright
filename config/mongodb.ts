import mongoose from 'mongoose';
import ENV from '../utils/env';
import { Logger } from '../utils/logger';

let connected = false;

export default class MongoDB {
  connect = async () => {
    try {
      await mongoose.connect(`${ENV.MONGODB_URL}`);
      Logger.Success('Successfully connected to MongoDB');
      connected = true;
    } catch (error) {
      Logger.Error(`Failed connecting to MongoDB:\n${error.message}`);
    }
  };

  disconnect = async () => {
    try {
      if (connected) {
        await mongoose.disconnect();
        Logger.Success('Successfully disconnected from MongoDB');
        connected = false;
      }
    } catch (error) {
      Logger.Error(`Failed disconnecting from MongoDB:\n${error.message}`);
    }
  };
}
