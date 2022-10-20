import {IsNotEmpty, MinLength } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helper";

export class UpdateUserDto {  
  @MinLength(2, {message: MessagesHelper.MIN_LENGTH_NAME_ERROR})
  @IsNotEmpty({ message: MessagesHelper.NAME_IS_NOT_EMPTY })
  name: string;
}