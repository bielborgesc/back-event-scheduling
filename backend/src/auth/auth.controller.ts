import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('user')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: any){
    return this.authService.login(req.user);
  }
}
