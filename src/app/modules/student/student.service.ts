import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudent = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('user Already Exists')
    
  }
  const result = await Student.create(studentData);


  return result;
};

const getAllStudent = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentServices = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
