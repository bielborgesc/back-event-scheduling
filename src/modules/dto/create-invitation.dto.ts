import { IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helper";
import { RegExHelper } from "src/helpers/regex.helper";
import { User } from "../user/user.entity";

export class CreateInvitationDto {
  
  @IsNotEmpty({message: MessagesHelper.STATUS_IS_NOT_EMPTY})
  @Matches(RegExHelper.status, {message: MessagesHelper.STATUS_IS_NOT_VALID})
  status: string;

  @IsNotEmpty({message: MessagesHelper.EVENT_IS_NOT_EMPTY})
  event: Event;

  @IsNotEmpty({message: MessagesHelper.USER_IS_NOT_EMPTY})
  user: User;

}