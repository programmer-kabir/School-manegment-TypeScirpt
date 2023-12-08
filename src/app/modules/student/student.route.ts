import  express  from "express";
import { studentController } from "./student.controller";
const router = express.Router()

router.post('/create-student', studentController.createStudent)
router.get('/all-students', studentController.getAllStudent)
router.get('/all-student/:studentId', studentController.getSingleStudent)
export const StudentRoute = router;