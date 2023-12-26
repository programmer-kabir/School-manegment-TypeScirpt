import { Router } from 'express';
import { StudentRoute } from '../modules/student/student.route';
import { UserRoute } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { AcademicFaultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.route';

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
  {
    path: '/',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/',
    route: AcademicFaultyRoutes,
  },
  {
    path: '/',
    route: AcademicDepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
