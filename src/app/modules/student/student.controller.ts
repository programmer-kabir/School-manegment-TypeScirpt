import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  const { student } = req.body;
  try {
    const result = await studentServices.createStudent(student);
    res.status(200).json({
      success: true,
      message: 'Student Create Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
 try{
  const result = await studentServices.getAllStudent();
  res.status(200).json({
    success: true,
    message: 'Students are retrieved succesfully',
    data: result,
  });
 }
 catch(err){
  console.log(err);
 }
};
const getSingleStudent = async (req: Request, res: Response) => {
 try{
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudent(studentId);
  res.status(200).json({
    success: true,
    message: 'Students are retrieved succesfully',
    data: result,
  });
 }
 catch(err){
  console.log(err);
 }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent
};
