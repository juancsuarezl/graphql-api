import { Entity, BaseEntity, PrimaryGeneratedColumn, Column,  ManyToOne, JoinColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from './User'

@Entity()
@ObjectType()
export class Recipe extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  ingredients: string;

  @Field(() => String)
  @Column()
  category: string;

  @ManyToOne(type => User, user => user.recipes) 
  //@JoinColumn({name: "recipe_fk_user"})
  user: User;
}