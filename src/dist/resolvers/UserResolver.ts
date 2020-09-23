import {ObjectType, Query, Resolver, Mutation, Arg} from 'type-graphql'
import { User } from '../../entity/User'

@Resolver()
export class UserResolver {
    @Query(() => [User])
    users(){
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

    

