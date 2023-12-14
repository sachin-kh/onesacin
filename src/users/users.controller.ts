import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

  @Post()
  async create(@Body() createUserDto: CreateUserDto){
    return this.usersService.create(createUserDto)
  }

  @Get(':username')
  async findOne(@Param('username') username: string){
    return this.usersService.findOne(username)
  }
}
