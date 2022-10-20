import { IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helper";
import { RegExHelper } from "src/helpers/regex.helper";
import { User } from "../user/user.entity";

export class CreateEventDto{
  
  @IsNotEmpty({ message: MessagesHelper.USER_NOT_FOUND })
  user: User;

  @IsNotEmpty({ message: MessagesHelper.NAME_IS_NOT_EMPTY })
  description: string;
  
  @Matches(RegExHelper.date, {message: MessagesHelper.DATE_VALID})
  start: Date;
  
  @Matches(RegExHelper.date, {message: MessagesHelper.DATE_VALID})
  finish: Date;
 
}