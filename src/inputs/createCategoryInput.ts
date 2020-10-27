import { Entity, BaseEntity, PrimaryGeneratedColumn, 
  Column, OneToMany, CreateDateColumn, 
  JoinTable } from 'typeorm';
import { InputType, Field } from 'type-graphql';
import { Category } from '../entity/Category'
import { Recipe } from '../entity/Recipe';

@InputType()
export class CreateCategoryInput {
  @Field()
  name!: string;

  @OneToMany(() => Recipe, (recipe) => recipe.categories)
  @JoinTable()
  categories!:Category[];
}