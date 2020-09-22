import {ObjectType, Query, Resolver, Mutation} from 'type-graphql'
import { Recipe } from '../../entity/Recipe'
import { CreateRecipeInput} from '../../inputs/CreateRecipeInput'

@Resolver()
export class RecipeResolver {
    @Query(() => [Recipe])
    recipes(){

        return Recipe.find();
    }
}









