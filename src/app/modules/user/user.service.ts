import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || config.defaultPassword;
  userData.role = 'student';

  // academic Semester find
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  userData.id = await generateStudentId(admissionSemester);

  // Create user
  const NewUser = await User.create(userData);

  // Create student
  if (Object.keys(NewUser).length) {
    //set id , _id
    payload.id = NewUser.id;
    payload.user = NewUser._id;

    const newStudent = await Student.create(payload);
    return newStudent;
  }
  return NewUser;
};
export const userServices = {
  createStudentIntoDB,
};
