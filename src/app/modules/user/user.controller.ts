import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;
  const result = await userServices.createStudentIntoDB(password, student);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Student Create Successfully',
    data: result,
  });
  // console.log(result);
});

export const userControllers = {
  createStudent,
};
