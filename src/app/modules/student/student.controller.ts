import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';



const getAllStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const result = await studentServices.getAllStudent();
    if (!result || result.length === 0) {
      sendResponse(res, {
        success:false,
        statusCode:httpStatus.NOT_FOUND,
        message:'something went wrong on fetching',
        
      })

    } else {
      sendResponse(res, {
        success:true,
        statusCode:httpStatus.OK,
        message:'Student fetched Successfully',
        data:result
      })
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
      
      sendResponse(res, {
        success:false,
        statusCode:httpStatus.NOT_FOUND,
        message:'User not found'
      
      })

    } else {
      sendResponse(res, {
        success:true,
        statusCode:httpStatus.OK,
        message:'User fetched successfully!',
        data:result
      })
    }
  } catch (err) {

    next(err)
  }
};

const deleteStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteStudents(studentId);
    sendResponse(res, {
      success:true,
      statusCode:httpStatus.OK,
      message:'Students are delete successfully',
      data:result
    })
  } catch (err) {
    next(err)
  }
};

export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent
};
