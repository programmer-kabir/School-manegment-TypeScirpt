import mongoose from 'mongoose';
import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || config.defaultPassword;
  userData.role = 'student';

  // academic Semester find
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    userData.id = await generateStudentId(admissionSemester);

    // Create user (Transaction -1)
    const NewUser = await User.create([userData], { session });

    // Create student
    if (!NewUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    //set id , _id
    payload.id = NewUser[0].id;
    payload.user = NewUser[0]._id;
    // create a student (transaction-2)

    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
  }
};
export const userServices = {
  createStudentIntoDB,
};
