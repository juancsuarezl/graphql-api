import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { InputType, Field } from "type-graphql";
import { Recipe } from '../entity/Recipe'
import { User } from '../entity/User'

@InputType()
export class CreateRecipeInput {
  @Field()
  name!: string;

  @Field()
  ingredients!: string;

  @Field()
  category!: string;

  @Field()
  description!: string;

  @ManyToOne(type => User, user => user.recipes) 
  user!: User;


}