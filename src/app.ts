import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { GetAllRecipes, CreateRecipe, updateRecipe, GetRecipeById, GetRecipeByName, GetRecipesByCategory, deleteRecipeById, deleteRecipeByName} from './dist/resolvers/RecipeResolver'
import { GetAllUsers, GetUserById, CreateUser, updateUser, signUp, login, Me } from './dist/resolvers/UserResolver'
import { GetAllCategories, CreateCategory, updateCategory, deleteCategoryById, deleteCategoryByName} from './dist/resolvers/CategoryResolver'

export const startServer = async () => {
    const app = express();
    const server = new ApolloServer ({
    
         schema: await buildSchema({
            resolvers:[GetAllUsers, GetUserById, CreateUser, updateUser, signUp, login, Me,
                GetAllRecipes, CreateRecipe, updateRecipe, GetRecipeById, GetRecipeByName, GetRecipesByCategory, 
                deleteRecipeById, deleteRecipeByName, GetAllCategories, CreateCategory, updateCategory, 
                deleteCategoryById, deleteCategoryByName], 
            validate: false
        }),

        context: ({req, res}) => ({req, res})
    });

    server.applyMiddleware({app, path:'/graphql'});
    return app;
}
    

