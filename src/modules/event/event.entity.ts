import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Invitation } from '../invitation/invitation.entity';
import { User } from '../user/user.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  start: Date;

  @Column()
  finish: Date;

  @ManyToOne(() => User, (user) => user.events, { cascade: true, eager: true })
  user: User

  @OneToMany(() => Invitation, (invitation) => invitation.event)
  @JoinColumn({ name: 'invitation_id', referencedColumnName: 'id' })
  invitation: Invitation[]

}