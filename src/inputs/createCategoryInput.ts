import { InputType, Field } from "type-graphql";
import { Category } from '../entity/Category'

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;
}