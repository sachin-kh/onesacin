import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { SignupDto } from "./dto/signup.dto";
import { User } from '../users/interfaces/user.interface'


@Injectable()
export class AuthService {
    constructor(
        private UsersService: UsersService,
        private jwtService: JwtService,
    ){}
    
        async validateUser(username: string, pass : string): Promise<any>{
            const user = await this.UsersService.findOne(username);

            if(user && user.password == pass){
                const { password, ...result } = user;
                return result;
            }

            return null;
        }

    async login(loginDto : any){
        const user = await this.validateUser(loginDto.username, loginDto.password);
        if(!user){
            throw new Error("Invalid Cred")
        }
        const payload = {username: user.username, sub:user.userId, role: user.role}
        return {
            access_token: this.jwtService.sign(payload)
        }


    }
}