import {ObjectType, Query, Resolver, Mutation, Arg, Field, UseMiddleware, Ctx } from 'type-graphql'
import { User, LoginResponse } from '../../entity/User'
import { CreateUserInput} from '../../inputs/createUserInput'
import { UpdateUserInput } from '../../inputs/UpdateUserInput'
import { signUpInput } from '../../inputs/signUpInput'
import { hash, compare} from "bcryptjs"
import { sign } from "jsonwebtoken"
import { isAuth } from "../../isAuth";
import { MyContext } from "../../MyContext"

@Resolver()
export class GetAllUsers {
    @Query(() => [User])
    GetAllUsers(){
        return User.find();
    }
}

export class Me {
@Query(() => String)
  @UseMiddleware(isAuth)
  async Me(@Ctx() { payload }: MyContext) {
  return `Your user id : ${payload!.userId}`;
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
      //const hashedPassword = await hash(password, 13);
    // let user = null;
    try {
      await User.insert({
        name,
        email,
        password
        //password: hashedPassword
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
@Mutation(() => LoginResponse)
async Login(@Arg("email") email: string, @Arg("password") password: string) {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error("Could not find user");
  }

  /*const verify = await compare(password, user.password);

  if (!verify) {
    throw new Error("Bad password");*/

  if (password != user.password) {
    throw new Error("Incorrect password");
  }

  return {
    accessToken: sign({ userId: user.id }, "MySecretKey", {
      expiresIn: "15m"
    })
  };
}

} 