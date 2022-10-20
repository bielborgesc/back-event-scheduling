import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Invitation } from './invitation.entity';
import { InvitationService } from './invitation.service';
import { CreateInvitationDto } from '../dto/create-invitation.dto';
import { UpdateInvitationDto } from '../dto/update-invitation.dto';

@Controller('invitation')
@UseGuards(AuthGuard('jwt'))
export class InvitationController {

  constructor(
    private invitationService: InvitationService
  ){}

  @Post()
  async create(@Body() body: CreateInvitationDto): Promise<Invitation> {
    return await this.invitationService.create(body);
  }

  @Get()
  findAll(): Promise<Invitation[]> {
    return this.invitationService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Invitation> {
    return this.invitationService.findOneOrFail({ where: { id: id } });
  }

  @Get('/user/:idUser')
  findOneByIdUser(@Param('idUser') idUser: string): Promise<Invitation[]> {
    return this.invitationService.findByOrFail({ where: { user: {id: idUser} } });
  }

  @Get('/user/:idUser/:status')
  findOneByIdUserAndStatus(@Param('idUser') idUser: string, @Param('status') status: string): Promise<Invitation[]> {
    return this.invitationService.findByOrFail({ where: {status: status, user: {id: idUser} } });
  }

  @Get('/event/:idevent')
  findOneByIdEvent(@Param('idevent') idevent: number): Promise<Invitation[]> {
    return this.invitationService.findByOrFail({ where: { event: {id: idevent} } });
  }
  

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.invitationService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() event: UpdateInvitationDto) {
    return this.invitationService.update(id, event);
  }

}
