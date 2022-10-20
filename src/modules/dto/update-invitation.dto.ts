import { IsNotEmpty, Matches } from "class-validator";
import { MessagesHelper } from "src/helpers/messages.helper";
import { RegExHelper } from "src/helpers/regex.helper";

export class UpdateInvitationDto {

  @IsNotEmpty({message: MessagesHelper.STATUS_IS_NOT_EMPTY})
  @Matches(RegExHelper.status, {message: MessagesHelper.STATUS_IS_NOT_VALID})
  status: string;
}