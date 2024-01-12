import app from './app';
import config from 'config';
import connectDB from './db/connect';
import logger from './utils/logger.utils';

const port = config.get<number>('port');
const dbUri = config.get<string>('dbUri');

const startServer = async () => {
  try {
    await connectDB(dbUri);
    app.listen(port, () => logger.info(`App running on port ${port}`));
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

startServer();
