import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import productRouter from './routes/product.routes';
import paymentRouter from './routes/payment.routes';
import config from "config"

const app = express();

const clientUrl = config.get<string>("clientUrl")
const corsOptions = {
  origin: clientUrl,
  // origin: 'http://localhost:5173',
  credentials: true,
};

app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));
app.use('/api/payment', paymentRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

export default app;
