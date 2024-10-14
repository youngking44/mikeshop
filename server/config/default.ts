import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const PORT = process.env.PORT || 1337;
const DB_URI = process.env.DB_URI;
const CLIENT_URL = process.env.CLIENT_URL
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const SALT_WORK_FACTOR = 10;

export default {
  port: PORT,
  dbUri: DB_URI,
  clientUrl: CLIENT_URL,
  webhookSecret: WEBHOOK_SECRET,
  accessToken: JWT_SECRET,
  refreshToken: REFRESH_TOKEN,
  saltWorkFactor: SALT_WORK_FACTOR,
};
