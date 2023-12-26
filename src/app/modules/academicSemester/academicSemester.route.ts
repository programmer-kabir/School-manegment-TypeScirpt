import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
const router = express.Router();
router.post(
  '/create-academicSemester',
  validateRequest(AcademicSemesterValidation.createAcademicValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);
router.get(
  '/all-academicSemester',
  AcademicSemesterControllers.getAllAcademicSemester,
);
router.get(
  '/all-academicSemester/:id',
  AcademicSemesterControllers.getSingleAcademicSemester,
);
export const AcademicSemesterRoutes = router;
