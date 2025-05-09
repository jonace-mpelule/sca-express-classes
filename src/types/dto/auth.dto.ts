import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Length, } from "class-validator";

class LoginDTO {
    @IsString()
    @IsNotEmpty({ message: "Please provide an email" })
    @IsEmail({}, { message: "Please provide a valid email" })
    email: string;


    @IsString({})
    @IsNotEmpty()
    password: string
}

export {
    LoginDTO
}