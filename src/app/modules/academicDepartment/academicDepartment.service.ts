import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};
const getAllAcademicDepartmentFromDb = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentFromDb = async (id: string) => {

  console.log(id);
  const result = await AcademicDepartment.findById( id ).populate('academicFaculty');
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id} ,
    payload,
    {
      new: true,
    },
  );
  // console.log(result);
  return result;
};

export const AcademicDepartmentService = {
  createAcademicDepartmentIntoDB, 
  getAllAcademicDepartmentFromDb,
  getSingleAcademicDepartmentFromDb,
  updateAcademicDepartmentIntoDB
}