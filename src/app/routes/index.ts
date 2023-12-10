import { Router } from 'express';
import { StudentRoute } from '../modules/student/student.route';
import { UserRoute } from '../modules/user/user.route';


const router = Router();
// router.use('/', StudentRoute)
// router.use('/', UserRoute)

const moduleRoutes = [
  {
    path: '/',
    route: UserRoute,
  },
  {
    path: '/',
    route: StudentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;