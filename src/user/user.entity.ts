import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("User")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({ type: "varchar", length: 100 })
  lastName: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  username: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email: string;
}
