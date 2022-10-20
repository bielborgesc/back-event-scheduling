import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { User } from 'src/modules/user/user.entity';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

  async login(user){
    const payload = { sub: user.id, email: user.email };
    return{
      token: this.jwtService.sign(payload)
    }
  }

  async validateUser(email: string, password: string){
    let user: User;
      user = await this.userService.findOneOrFail({where: {email: email}})
      const isPasswordValid = compareSync(password, user.password);
      if(!isPasswordValid) throw new Error()
      return user;
  }
}
