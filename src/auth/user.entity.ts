import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from 'src/tasks/task.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(_type => Task, task => task.user, { eager: true })
  tasks: Task[];
}
