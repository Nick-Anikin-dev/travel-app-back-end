import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { FindOptionsWhere } from "typeorm/find-options/FindOptionsWhere";

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
  }

  async create(dto: CreateUserDto) {
    const new_user = this.userRepository.create(dto);
    return await this.userRepository.save(new_user);
  }

  async findOneWhere(options: FindOptionsWhere<User>) {
    return await this.userRepository.findOne({
      where: options,
    })
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: {id}
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async updatePassword(user_id, password) {
    return await this.userRepository.update({id: user_id}, {password})
  }


  async find() {
    return await this.userRepository.find()
  }
}
