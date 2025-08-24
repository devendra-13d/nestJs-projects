import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Devendra' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Doe' },
  ];
  findAll() {
    return this.users;
  }
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
