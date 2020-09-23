import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { RecipeResolver} from './dist/resolvers/RecipeResolver'
import { UserResolver, GetUserById } from './dist/resolvers/UserResolver'
import { CreateUser } from './dist/resolvers/CreateUser'
import { CreateRecipe } from './dist/resolvers/CreateRecipe'
import { CreateCategory} from './dist/resolvers/CreateCategory'
//import { GetUserById} from './dist/resolvers/getUserById'

export const startServer = async () => {
    const app = express();
    const server = new ApolloServer ({
    
         schema: await buildSchema({
            resolvers:[ RecipeResolver, UserResolver, CreateRecipe, 
                CreateUser, CreateCategory, GetUserById],
            validate: false
        })
    })    
    server.applyMiddleware({app, path:'/graphql'});
    return app;
}
    
    





