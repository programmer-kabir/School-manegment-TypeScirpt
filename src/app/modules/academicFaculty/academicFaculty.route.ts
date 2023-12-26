import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();
router.post(
  '/create-academicFaulty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);
router.get(
  '/all-academicFaulty',
  AcademicFacultyControllers.getAllAcademicFaulty,
);
router.get(
  '/all-academicFaulty/:facultyId',
  AcademicFacultyControllers.getSingleAcademicFaulty,
);
router.patch(
  '/academicFaulty/:facultyId',
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);
export const AcademicFaultyRoutes = router;
