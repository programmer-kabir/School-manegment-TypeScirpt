import { Student } from './student.model';
import { TStudent } from './student.interface';


const getAllStudentIntoDb = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentData = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
const deleteStudents = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentServices = {
   getAllStudentIntoDb,
  getSingleStudentData,
  deleteStudents,
};
