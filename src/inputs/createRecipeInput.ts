import { InputType, Field } from "type-graphql";

@InputType()
export class CreateRecipeInput {
  @Field()
  name!: string;

  @Field()
  ingredients!: string;

  @Field()
  category!: string;

}