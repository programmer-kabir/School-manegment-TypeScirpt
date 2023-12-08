import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student/student.interface';
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});
const guardianSchema = new Schema<Guardian>({
    fatherName: {
      type: String,
      required: true,
    },
    fatherOccupation: {
      type: String,
      required: true,
    },
    fatherContactNo: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherOccupation: {
      type: String,
      required: true,
    },
    motherContactNo: {
      type: String,
      required: true,
    },
  });
  const localGuardianSchema = new Schema<LocalGuardian>({
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  });
const studentSchema = new Schema<Student>({
  id: { type: String, unique:true, required: [true, 'ID is required'],},
  name: {
    type:userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, 'Email is required'], unique:true },
  contactNo: { type: String,  required: [true, 'Contact number is required'] },
  emergencyContactNo: { type: String, required: [true, 'Emergency number is required'] },
  bloodGroup: {
    type:String,
    enum:['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    message:'{VALUE} is not a valid blood group! Please give me right Group',
  },
  presentAddress: { type: String, required: [true, 'Present Address is required'] },
  permanentAddress: { type: String, required: [true, 'Permanent Address is required'] },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian:{
    type:localGuardianSchema,
    required:[true, 'Local Guardian is required']
    
  },
  profileImg:{type:String},
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: '{VALUE} is not a valid status',
    },
    default: 'active',
  },


});
export const StudentModel = model<Student>("student",studentSchema)