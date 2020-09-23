
import { Mutation, Arg} from 'type-graphql'
import { Recipe } from '../../entity/Recipe'
import { CreateRecipeInput} from '../../inputs/createRecipeInput'

const data = new CreateRecipeInput;

export class CreateRecipe {
  @Mutation(() => Recipe)
  async createRecipe(@Arg("data") data: CreateRecipeInput) {
    const recipe = Recipe.create();
    await recipe.save();
    return recipe;
  }
}




