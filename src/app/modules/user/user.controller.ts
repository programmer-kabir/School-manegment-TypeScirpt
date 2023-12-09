import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;
    // Student Validation
    //   const ValidationData = studentValidationSchema.parse(student);
    const result = await userServices.createStudent(password, student);
    res.status(200).json({
      success: true,
      message: 'Student Create Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userControllers = {
  createStudent,
};
