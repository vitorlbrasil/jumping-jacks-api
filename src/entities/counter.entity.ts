import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("counters")
export class Counter {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  finished_at: Date;

  @Column("integer")
  sets: number;

  @Column("integer")
  reps: number;

  @Column("integer")
  total: number;

  @ManyToOne(() => User, (user) => user.counters)
  user: User;
}
