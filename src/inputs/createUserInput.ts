import { InputType, Field } from "type-graphql";
import { User } from '../entity/User'

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}