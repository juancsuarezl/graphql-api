import { InputType, Field } from "type-graphql";
import { Recipe } from '../entity/Recipe'

@InputType()
export class CreateRecipeInput {
  @Field()
  name: string;

  @Field()
  ingredients: string;

  @Field()
  category: string;
}