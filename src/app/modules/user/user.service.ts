import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudent = async (password:string,studentData: TStudent) => {
    const userData:Partial<TUser> ={}

    userData.password = password  || config.defaultPassword;
    userData.role = "student"
    // set manulay id
    userData.id='2030100001'

    // Create user
    const NewUser = await User.create(userData);
  
    // Create student
    if(Object.keys(NewUser).length) {
        //set id , _id
        studentData.id = NewUser.id
        studentData.user = NewUser._id

        const newStudent = await Student.create(studentData)
        return newStudent
    }
    return NewUser;
  };
  export const userServices = {
    createStudent
  }