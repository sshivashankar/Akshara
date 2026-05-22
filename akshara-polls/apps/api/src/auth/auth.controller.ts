import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IsEmail, IsString } from 'class-validator';
class LoginDto { @IsEmail() email!: string; @IsString() password!: string; }
@Controller('api/auth')
export class AuthController {
  constructor(private jwt: JwtService) {}
  @Post('login')
  login(@Body() body: LoginDto) {
    if (body.email !== process.env.ADMIN_EMAIL || body.password !== process.env.ADMIN_PASSWORD) throw new UnauthorizedException();
    return { access_token: this.jwt.sign({ sub: 'admin', email: body.email }) };
  }
}
