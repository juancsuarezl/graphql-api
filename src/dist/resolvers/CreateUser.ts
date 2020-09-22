import { Mutation, Arg} from 'type-graphql'
import { User } from '../../entity/User'
import { CreateUserInput} from '../../inputs/createUserInput'

const data = new CreateUserInput;
 
export class CreateUser {
  @Mutation((data) => User)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = User.create();
    await user.save();
    return user;
  }
}