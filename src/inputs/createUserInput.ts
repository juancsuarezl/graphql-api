import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { InputType, Field, ObjectType } from "type-graphql";
import { User } from '../entity/User'
import { Recipe } from '../entity/Recipe'

@InputType()
export class CreateUserInput {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  password!: string;

  @OneToMany(type => Recipe, recipe => recipe.user) 
  recipes!: [Recipe]; 
}