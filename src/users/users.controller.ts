import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/users-list') //Get route
  findAll() {
    return this.userService.findAll();
  }
  @Get('/user/:id') //get using
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }
}
