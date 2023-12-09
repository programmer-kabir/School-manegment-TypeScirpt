import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';



const getAllStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const result = await studentServices.getAllStudent();
    if (!result || result.length === 0) {
      res.status(404).json({
        success: false,
        message: 'something went wrong on fetching',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Student fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    next(error)
  
  }
};
const getSingleStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentData(studentId);
    if (!result) {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    }
  } catch (err) {

    next(err)
  }
};

const deleteStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteStudents(studentId);
    res.status(200).json({
      success: true,
      message: 'Students are delete successfully',
      data: result,
    });
  } catch (err) {
    next(err)
  }
};

export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent
};
