import { IsEmail, IsEnum, Length } from "class-validator";
import { Entity, Column, OneToMany } from "typeorm";
import Model from "./Model";
import { Post } from "./Post";

@Entity("users")
export class User extends Model {
  @Column()
  @Length(4, 255)
  name: string;

  @Column()
  @Length(4, 255)
  @IsEmail()
  email: string;

  @Column({
    type: "enum",
    enum: ["user", "admin", "superAdmin"],
    default: "user",
  })
  @IsEnum(["user", "admin", "superAdmin", undefined])
  role: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: User[];
}
