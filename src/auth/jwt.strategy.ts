import { Strategy, ExtractJwt} from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import { ConfigService } from '@nestjs/config'


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly usersService: UsersService,
        private readonly configService: ConfigService
        ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrkey: configService.get<string>('JWT_SECRET'),
        })
    }
    async validate(payload:any){
       const user = await this.usersService.findOne(payload.username);
       if(!user){
        throw new Error('User not Found')
       }
       return UsersService;
    }
}