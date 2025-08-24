import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
@Controller('users')
export class UsersController {

  constructor(
    private readonly userService:UsersService
  ) { }
  
  @Get()
  findAll(): Promise<User[]>{
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id:number): Promise<User | null>{
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() user: Partial<User>): Promise<User>{
    return this.userService.create(user);
  }

  @Put(':id')
  update(@Param('id') id:number,@Body() user: Partial<User>): Promise<User|null>{
    return this.userService.update(id,user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void>{
    return this.userService.remove(id);
  }
}
