import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventController } from "./event.controller";
import { Event } from "./event.entity";
import { EventService } from "./event.service";
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), UserModule],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService]
})
export class EventModule {}