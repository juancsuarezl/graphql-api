import {ObjectType, Query, Resolver, Mutation, Arg} from 'type-graphql'
import { User } from '../../entity/User'
import { CreateUserInput} from '../../inputs/createUserInput'
import { UpdateUserInput } from '../../inputs/UpdateUserInput'
import { signUpInput } from '../../inputs/signUpInput'
import { hash, compare} from "bcryptjs"

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

export class signUp {
  @Mutation(() => Boolean)
  async signUp(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string) 
    {
      const user = await User.findOne({where: {email}});
    if (user){
      throw new Error("Email already in use");
    } else {
      const hashedPassword = await hash(password, 13);
    // let user = null;
    try {
      await User.insert({
        name,
        email,
        password: hashedPassword
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
    }
  
  }
}

export class login {
  @Mutation(() => Boolean)
  async login(@Arg("email") email: string, @Arg("password") password: string) {
  try{
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("Could not find user");
      //LoginResponse = false;
      return false;
    }
    if (password === user.password){
      console.log("Succesfull Login!")
      return true;
    } else {
      throw new Error("Wrong password");
      return false;
    }
    
  }catch (error) {
    console.log(error);
    throw error;
  }

  }  
}

  