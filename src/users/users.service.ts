import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from './interfaces/user.interface'


@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly UserModel: Model<User>
    ){}

    async create(createUserDto : CreateUserDto): Promise<User>{
        const createdUser = new this.UserModel(createUserDto)
        return await createdUser.save();
    }


    async findOne(username : string): Promise<User | undefined>{

        return this.UserModel.findOne({username}).exec();
}
}