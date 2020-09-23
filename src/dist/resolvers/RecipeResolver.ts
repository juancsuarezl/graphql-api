import {ObjectType, Query, Resolver, Mutation, Arg} from 'type-graphql'
import { Recipe } from '../../entity/Recipe'
import { CreateRecipeInput} from '../../inputs/createRecipeInput'
import { UpdateRecipeInput } from '../../inputs/updateRecipeInput'

@Resolver()
export class GetAllRecipes {
    @Query(() => [Recipe])
    GetAllRecipes(){
        return Recipe.find();
    }
}

export class GetRecipeById {
    @Query(() => Recipe)
    async GetRecipeById(@Arg("id") id: string) {
       const recipe = await Recipe.findOne({ where: { id }});
       if(!recipe){ 
        throw new Error(`Recipe with ID = ${id} doesn´t exist`);
       }
       return recipe;  
    }
 }

 export class GetRecipeByName {
    @Query(() => Recipe)
    async GetRecipeByName(@Arg("name") name: string) {
       const recipe = await Recipe.findOne({ where: { name }});
       if(!recipe){ 
        throw new Error(`Recipe with Name: ${name} doesn´t exist`);
       }
       return recipe;  
    }
 }

const data = new CreateRecipeInput;
 
export class CreateRecipe {
@Mutation(() => Recipe)
async createRecipe(@Arg("data") data: CreateRecipeInput) {
  const recipe = Recipe.create(data);
  await recipe.save();
  return recipe;
  }

}

export class updateRecipe {
    @Mutation(() => Recipe)
    async updateRecipe(@Arg("id") id: string, @Arg("data") data: UpdateRecipeInput) {
      const recipe = await Recipe.findOne({ where: { id }});
    
      if (!recipe) {
        throw new Error(`Recipe with id = ${id} does not exist!`);
      }
    
      Object.assign(recipe, data);
      await recipe.save();
    
      return recipe;
    }   
}







