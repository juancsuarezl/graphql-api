import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { InputType, Field } from 'type-graphql';
import { Recipe } from '../entity/Recipe';
import { User } from '../entity/User';
import { Category } from '../entity/Category';

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

  @ManyToMany(() => Category)
  @JoinTable()
  categories!: Category[];

  @ManyToOne(() => User, (user) => user.recipes)
  @JoinTable()
  user!: User;

}