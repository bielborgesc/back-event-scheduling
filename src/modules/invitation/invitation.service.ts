import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, FindOneOptions, Repository } from 'typeorm';
import { Invitation } from './invitation.entity';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { CreateInvitationDto } from '../dto/create-invitation.dto';
import { UpdateInvitationDto } from '../dto/update-invitation.dto';


@Injectable()
export class InvitationService {

  constructor(
    @InjectRepository(Invitation)
    private invitationRepository: Repository<Invitation>,
  ) {}

  async create(data: CreateInvitationDto){
    try{
      console.log(data)
      return await this.invitationRepository.save(<Invitation><unknown>data);
    } catch(err){
      throw new HttpException({statusCode: HttpStatus.BAD_REQUEST, message: [MessagesHelper.GENERIC_ERROR]}, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Invitation[]> {
    try {
      return await this.invitationRepository.find()
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: [MessagesHelper.GENERIC_ERROR]}, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneOrFail(options: FindOneOptions<Invitation>): Promise<Invitation> {
    try {
      return await this.invitationRepository.findOneOrFail(options);
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.NOT_FOUND, message: [MessagesHelper.EVENT_NOT_FOUND]}, HttpStatus.NOT_FOUND);
    }
  }

  async findByOrFail(options: FindOneOptions<Invitation>): Promise<Invitation[]> {
    try {
      return await this.invitationRepository.find(options);
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.NOT_FOUND, message: [MessagesHelper.EVENT_NOT_FOUND]}, HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number) {
    try {
      await this.invitationRepository.findOneOrFail({where: {id: id}});
      this.invitationRepository.delete(id);
    } catch (err) {
      throw new HttpException({statusCode: HttpStatus.NOT_FOUND, message: [MessagesHelper.EVENT_NOT_FOUND]}, HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, data: UpdateInvitationDto): Promise<Invitation> {
    try {
      const ivite = await this.invitationRepository.findOneOrFail({where: {id: id}});
      this.invitationRepository.merge(ivite, data);
      return this.invitationRepository.save(ivite);
    } catch (err) {
      if(err instanceof EntityNotFoundError) throw new HttpException({statusCode: HttpStatus.NOT_FOUND, message: [MessagesHelper.EVENT_NOT_FOUND]}, HttpStatus.NOT_FOUND);
      else throw new HttpException({statusCode: HttpStatus.BAD_REQUEST, message: [MessagesHelper.DATE_MISMATCH]}, HttpStatus.BAD_REQUEST);
    } 
  }

}
