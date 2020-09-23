import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { GetAllRecipes, CreateRecipe, updateRecipe, GetRecipeById, GetRecipeByName} from './dist/resolvers/RecipeResolver'
import { GetAllUsers, GetUserById, CreateUser, updateUser } from './dist/resolvers/UserResolver'
import { GetAllCategories, CreateCategory} from './dist/resolvers/CategoryResolver'

export const startServer = async () => {
    const app = express();
    const server = new ApolloServer ({
    
         schema: await buildSchema({
            resolvers:[GetAllUsers, GetUserById, CreateUser, updateUser, 
                GetAllRecipes, CreateRecipe, updateRecipe, GetRecipeById,
                GetRecipeByName, GetAllCategories, CreateCategory],
            validate: false
        })
    })    
    server.applyMiddleware({app, path:'/graphql'});
    return app;
}
    
    





