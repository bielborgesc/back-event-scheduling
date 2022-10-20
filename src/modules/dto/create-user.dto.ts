import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helper";
import { RegExHelper } from "src/helpers/regex.helper";
import { Match } from "src/validators/confirm-password";

export class CreateUserDto{

  @MinLength(2, {message: MessagesHelper.MIN_LENGTH_NAME_ERROR})
  @IsNotEmpty({ message: MessagesHelper.NAME_IS_NOT_EMPTY })
  name: string;
  
  @IsEmail({}, { message: MessagesHelper.EMAIL_IS_NOT_VALID })
  email: string;
  
  @Matches(RegExHelper.password, {message: MessagesHelper.PASSWORD_VALID})
  password: string;

  @Match('password', {message: MessagesHelper.PASSWORD_MUST_BE_THE_SAME})
  confirmPassword: string;
  
}