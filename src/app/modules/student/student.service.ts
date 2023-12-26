import { Student } from './student.model';
import { TStudent } from './student.interface';

const getAllStudentIntoDb = async () => {
  const result = await Student.find()
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
    .populate('admissionSemester');
  return result;
};

const getSingleStudentData = async (id: string) => {
  const result = await Student.findById(id).populate({
    path: 'academicDepartment',
    populate: {
      path: 'academicFaculty',
    },
  })
  .populate('admissionSemester');
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
