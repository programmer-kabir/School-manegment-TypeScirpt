import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudent();
  if (!result || result.length === 0) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'something went wrong on fetching',
    });
  } else {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Student fetched Successfully',
      data: result,
    });
  }
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentData(studentId);
  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'User not found',
    });
  } else {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User fetched successfully!',
      data: result,
    });
  }
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudents(studentId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Students are delete successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
