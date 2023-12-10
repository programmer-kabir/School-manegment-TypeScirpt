import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// Parse
app.use(express.json());
app.use(cors());

// application route
app.use('/', router)



// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req: Request, res: Response) => {
  res.send('Server running😁😂🤣');
});

// Global Error Handle
app.use(globalErrorHandler)

// Not Found
app.use(notFound)

export default app;
