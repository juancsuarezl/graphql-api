import {ObjectType, Query, Resolver, Mutation, Arg} from 'type-graphql'
import { User } from '../../entity/User'
import { CreateUserInput} from '../../inputs/createUserInput'
import { UpdateUserInput } from '../../inputs/UpdateUserInput'

@Resolver()
export class GetAllUsers {
    @Query(() => [User])
    GetAllUsers(){
        return User.find();
    }
}

export class GetUserById {
    @Query(() => User)
    async GetUserById(@Arg("id") id: string) {
       const user = await User.findOne({ where: { id }});
       if(!user){ 
        throw new Error(`User with ID = ${id} doesn´t exist`);
       }
       return user;  
    }
 }

const data = new CreateUserInput;
 
export class CreateUser {
@Mutation(() => User)
async createUser(@Arg("data") data: CreateUserInput) {
  const user = User.create(data);
  await user.save();
  return user;
  }

}

export class updateUser {
@Mutation(() => User)
async updateUser(@Arg("id") id: string, @Arg("data") data: UpdateUserInput) {
  const user = await User.findOne({ where: { id }});

  if (!user) {
    throw new Error(`The user with id: ${id} does not exist!`);
  }

  Object.assign(user, data);
  await user.save();

  return user;
}   

}