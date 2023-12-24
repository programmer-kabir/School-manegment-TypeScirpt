import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};
const getAllAcademicSemesterIntoDb = async () => {
  const result = await AcademicSemester.find();
  return result;
};
const getSingleAcademicSemesterIntoDb = async (id:string) => {
  const result = await AcademicSemester.findOne({id});
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemesterIntoDb,
  getSingleAcademicSemesterIntoDb
};
