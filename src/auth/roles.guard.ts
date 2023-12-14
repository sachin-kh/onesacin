import { CanActivate, Injectable, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY, Roles } from "./roles.decorator";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/interfaces/user.interface";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private reflector: Reflector, private userService : UsersService){}
    
    async canActivate(context: ExecutionContext): Promise<boolean>{
        const requiredRoles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler());
        if(requiredRoles){
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = await this.userService.findOne(request.user.username);
        return requiredRoles.some((role)=> user.role.includes(role));
    }
}