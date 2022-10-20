import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { Event } from './event.entity';
import { EventService } from './event.service';


@Controller('event')
@UseGuards(AuthGuard('jwt'))
export class EventController {
  constructor(
    private eventService: EventService,
    ) {}

  @Post()
  async create(@Body() body: CreateEventDto): Promise<Event> {
    return await this.eventService.create(body);
  }

  @Get()
  findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Event> {
    return this.eventService.findOneOrFail({ where: { id: id } });
  }

  @Get('/user/:idUser')
  findOneByIdUser(@Param('idUser') idUser: string): Promise<Event[]> {
    return this.eventService.findByOrFail({ where: { user: {id: idUser} } });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.eventService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() event: UpdateEventDto) {
    return this.eventService.update(id, event);
  }
}