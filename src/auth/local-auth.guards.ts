import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MessagesHelper } from 'src/helpers/messages.helper';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }
  handleRequest(err: any, user: any, info: any, context: any, status: any) {
    if (err || !user) {
      throw new HttpException({
        statusCode: HttpStatus.UNAUTHORIZED, 
        message: [MessagesHelper.PASSWORD_OR_EMAIL_INVALID], 
      }, HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}