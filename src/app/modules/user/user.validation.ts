import { z } from "zod";

const userValidationSchema = z.object({
    password:z.string({invalid_type_error:"password must be string"}).max(20,{message:"password more than 20 character"}).min(8,{message:"password must be 8 character"}).optional(),

})

export const userValidation = {
    userValidationSchema,
}