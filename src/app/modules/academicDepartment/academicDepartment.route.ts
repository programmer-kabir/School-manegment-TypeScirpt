import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
const router = express.Router();
router.post(
  '/create-academicDepartment',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);
router.get(
  '/all-academicDepartment/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);
router.get(
  '/all-academicDepartment',
  AcademicDepartmentControllers.getAllAcademicDepartment,
);

router.patch(
  '/academicDepartment/:departmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
