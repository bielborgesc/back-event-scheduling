import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { MessagesHelper } from 'src/helpers/messages.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(data: CreateUserDto) {
    try {
      delete data.confirmPassword;
      const user = this.userRepository.create(data);
      return await this.userRepository.save(user)
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.UNPROCESSABLE_ENTITY, message: [MessagesHelper.EMAIL_ALREADY_EXISTS]}, HttpStatus.UNPROCESSABLE_ENTITY);
    }

  }

  findAll(): Promise<User[]> {
    try {
      return this.userRepository.find({ 
        select: ['name', 'email']
      });
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: [MessagesHelper.GENERIC_ERROR]}, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneOrFail(options: FindOneOptions<User>): Promise<User> {
    try {
      return await this.userRepository.findOneOrFail(options);    
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.NOT_FOUND, message: [MessagesHelper.USER_NOT_FOUND]}, HttpStatus.NOT_FOUND);
    }

  }

  async remove(id: string) {
    try {
      await this.userRepository.findOneOrFail({where: {id: id}}).catch(() => {throw new Error()});
      this.userRepository.delete(id);
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.NOT_FOUND, message: [MessagesHelper.USER_NOT_FOUND]}, HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({where: {id: id}}).catch(() => {throw new NotFoundException()});
      this.userRepository.merge(user, data)
      return this.userRepository.save(user);
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.NOT_FOUND, message: [MessagesHelper.USER_NOT_FOUND]}, HttpStatus.NOT_FOUND);
    }
  }
}