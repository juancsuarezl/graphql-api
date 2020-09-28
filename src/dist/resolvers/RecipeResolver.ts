import {ObjectType, Query, Resolver, Mutation, Arg, MiddlewareFn, UseMiddleware} from 'type-graphql';
import { verify } from "jsonwebtoken";
import { MyContext } from "../../MyContext";
import { isAuth } from "../../isAuth";
import { Recipe } from '../../entity/Recipe';
import { User } from '../../entity/User';
import { Category } from '../../entity/Category';
import { CreateRecipeInput} from '../../inputs/createRecipeInput';
import { UpdateRecipeInput } from '../../inputs/updateRecipeInput';

@Resolver()
export class RecipeResolver {
    @Query(() => [Recipe])
    //@UseMiddleware(isAuth)
    GetAllRecipes(){
        return Recipe.find();
    }

    @Query(() => Recipe)
    async GetRecipeById(@Arg("id") id: string) {
       const recipe = await Recipe.findOne({ where: { id }});
       if(!recipe){ 
        throw new Error(`Recipe with ID = ${id} doesn´t exist`);
       }
       return recipe;  
    }
 
    @Query(() => Recipe)
    async GetRecipeByName(@Arg("name") name: string) {
      const recipe = await Recipe.findOne({ where: { name }});
      if (!recipe) throw new Error(`The recipe with name: ${name} doesn't exist`);
      return recipe;
      }  
    
  @Query(() => [Recipe]!)
  async GetRecipesByCategory(@Arg("category") category: string) {
     const recipe = await Recipe.find({ where: { category }});
     if(recipe.length == 0){ 
      throw new Error(`Category: ${category} doesn´t exist`);
     }
     return recipe;  
  }

//const data = new CreateRecipeInput;
 
@Mutation(() => Recipe)
async createRecipe(@Arg("data") data: CreateRecipeInput) {
  const recipe = Recipe.create(data);
  await recipe.save();
  return recipe;
  }

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

@Mutation(() => Boolean)
async deleteRecipeById(@Arg("id") id: string) {
  const recipe = await Recipe.findOne({ where: { id } });
  if (!recipe) throw new Error("Recipe not found!");
  await recipe.remove();
  return true;
  }

  @Mutation(() => Boolean)
  async deleteRecipeByName(@Arg("name") name: string) {
    const recipe = await Recipe.findOne({ where: { name } });
    if (!recipe) throw new Error("Recipe not found!");
    await recipe.remove();
    return true;
  }
}







