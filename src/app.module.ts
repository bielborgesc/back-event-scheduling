import { InvitationModule } from './modules/invitation/invitation.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { User } from './modules/user/user.entity';
import { UserModule } from './modules/user/user.module';

import { EventModule } from './modules/event/event.module';
import { Event } from './modules/event/event.entity';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { Invitation } from './modules/invitation/invitation.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User, Event, Invitation],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UserModule,
    EventModule,
    InvitationModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
