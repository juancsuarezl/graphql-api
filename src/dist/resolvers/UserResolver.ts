import {ObjectType, Query, Resolver, Mutation, Arg} from 'type-graphql'
import { User } from '../../entity/User'

@Resolver()
export class UserResolver {
    @Query(() => [User])
    users(){
        return User.find();
    }
}

