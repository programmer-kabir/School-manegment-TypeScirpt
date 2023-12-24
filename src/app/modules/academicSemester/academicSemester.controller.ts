import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Academic Semester is Create Successfully',
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterIntoDb();
  if (!result || result.length === 0) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'something went wrong on fetching',
    });
  } else {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic semesters are retrieved successfully',
      data: result,
    });
  }
});

const getSingleAcademicSemester= catchAsync(async (req, res) => {
  const { semesterId  } = req.params;
  const result = await AcademicSemesterServices.getSingleAcademicSemesterIntoDb(semesterId );
  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: 'AcademicSemester not found',
    });
  } else {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Academic semester is retrieved succesfully',
      data: result,
    });
  }
});


export const AcademicSemesterControllers  = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester
};
