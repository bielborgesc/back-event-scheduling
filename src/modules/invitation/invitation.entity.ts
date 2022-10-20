import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "../event/event.entity";
import { User } from "../user/user.entity";

@Entity()
export class Invitation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @ManyToOne(() => Event, (event) => event.invitation, { cascade: true, eager: true })
  event: Event;

  @ManyToOne(() => User, (user) => user.invitation, { cascade: true, eager: true })
  user: User;

}