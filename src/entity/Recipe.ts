import { Entity, BaseEntity, PrimaryGeneratedColumn, 
Column, ManyToOne, ManyToMany, CreateDateColumn, 
JoinTable } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';
import { Category } from './Category';

@Entity()
@ObjectType()
export class Recipe extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column()
  description!: string;

  @Field(() => String)
  @Column()
  ingredients!: string;

  @Field(() => String)
  @Column()
  category!: string;

  @Field(() => String)
  @CreateDateColumn({ type: "timestamp" })
  createdAt!: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories!: Category[];

  @ManyToOne(() => User, (user) => user.recipes)
  @JoinTable()
  user!: User;
}