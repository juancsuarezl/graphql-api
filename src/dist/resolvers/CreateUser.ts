import { Mutation, Arg} from 'type-graphql'
import { User } from '../../entity/User'
import { CreateUserInput} from '../../inputs/createUserInput'

const data = new CreateUserInput;
 
export class CreateUser {
@Mutation(() => User)
async createUser(@Arg("data") data: CreateUserInput) {
  const user = User.create(data);
  await user.save();
  return user;
  }

}