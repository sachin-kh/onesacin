
import { Body, Controller, Get, UseGuards, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){
    }

 
    @Post('signup')
    async signup(@Body() signupDto: SignupDto) {
        // return this.authService.signup(signupDto)
    }

    @Post('login')
    async login(@Body() loginDto: any) {
        return this.authService.login(loginDto)
    }
}
