import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }
  
  findAll(): Promise<User[]>{
    return this.userRepository.find();
  }
  findOne(id: number): Promise<User|null> {
    return this.userRepository.findOneBy({ id });
  }

  create(user: Partial<User>): Promise<User>{
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async update(id: number, user: Partial<User>): Promise<User | null> {
    const existing = await this.findOne(id);
    if (!existing) return null;

    const updated = Object.assign(existing, user)
    return this.userRepository.save(updated);
  }

  async remove(id: number): Promise<void>{
    await this.userRepository.delete(id);
  }

}
