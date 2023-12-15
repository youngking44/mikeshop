import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 1337;
const DB_URI = process.env.DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

export default {
  port: PORT,
  dbUri: DB_URI,
  accessToken: JWT_SECRET,
  refreshToken: REFRESH_TOKEN,
};
