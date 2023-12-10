import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;
    const result = await userServices.createStudent(password, student);
    sendResponse(res, {
      success:true,
      statusCode:httpStatus.OK,
      message:'Student Create Successfully',
      data:result
    })
  } catch (err) {
    next(err);
  }
};

export const userControllers = {
  createStudent,
};
