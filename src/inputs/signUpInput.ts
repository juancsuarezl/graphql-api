import { InputType, Field } from "type-graphql";
import { User } from '../entity/User'

@InputType()
export class signUpInput {
  @Field()
  name: string;

  @Field()
  password: string;
}