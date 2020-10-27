import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Recipe } from './Recipe';

@Entity()
@ObjectType()
export class Category extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!:string;

  @Field(() => String)
  @Column()
  name!:string;

  @OneToMany(() => Recipe, (recipe) => recipe.categories)
  categories!:Category[];
}