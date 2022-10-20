import {IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helper";
import { RegExHelper } from "src/helpers/regex.helper";

export class UpdateEventDto {  
  @IsNotEmpty({ message: MessagesHelper.DESCRIPTION_IS_NOT_EMPTY })
  description: string;
  
  @IsNotEmpty()
  @Matches(RegExHelper.date, {message: MessagesHelper.DATE_VALID})
  start: Date;

  @IsNotEmpty()
  @Matches(RegExHelper.date, {message: MessagesHelper.DATE_VALID})
  finish: Date;
}