import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from '../client/client.entity';

@Entity()
export class Email extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // ************
  // ManyToOne

  @Column()
  clientId: string;

  @ManyToOne(() => Client, (client) => client.emails)
  client: Client;

  // ************

  @Column('text')
  email: string;

  // ************

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  main: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
