import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudent = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudent = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudent = async (id: string) => {
    const result = await StudentModel.findOne({ id });
    return result;
  };
  

export const studentServices = {
  createStudent,
  getAllStudent,
  getSingleStudent
};
