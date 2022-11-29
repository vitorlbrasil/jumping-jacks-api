import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Counter } from "./counter.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column("date")
  birthdate: Date;

  @Column("boolean", { default: false })
  is_adm: boolean;

  @Column("boolean", { default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Counter, (counter) => counter.user)
  counters: Counter[];
}
