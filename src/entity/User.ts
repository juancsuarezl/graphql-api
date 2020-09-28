import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, JoinTable } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { hash, compare } from "bcryptjs";
import { Recipe } from './Recipe'

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password!: string;

  @Field(() => String)
  @CreateDateColumn({type: "timestamp"})
  createdAt!: string;

  @OneToMany(type => Recipe, recipe => recipe.user)
  @JoinTable() 
  recipes!: [Recipe]; 

}

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken!: string;
}