import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.route';
const app: Application = express();

// Parse
app.use(express.json());
app.use(cors());

// application route
app.use('/', StudentRoute)
app.use('/', UserRoute)


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req: Request, res: Response) => {
  res.send('Server running😁😂🤣');
});



export default app;
