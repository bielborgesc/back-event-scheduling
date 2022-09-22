import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert, JoinColumn} from 'typeorm';
import { hashSync } from 'bcrypt';
import { Event } from '../event/event.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword(){
    this.password = hashSync(this.password, 10)
  }

  @OneToMany(() => Event, (event) => event.user)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  events: Event[]

}