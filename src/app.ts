import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RecipeResolver} from './dist/resolvers/RecipeResolver';
import { UserResolver } from './dist/resolvers/UserResolver';
import { CategoryResolver} from './dist/resolvers/CategoryResolver';

export const startServer = async () => {
    const app = express();
    const server = new ApolloServer ({
    
         schema: await buildSchema({
            resolvers:[UserResolver, RecipeResolver, CategoryResolver], 
            validate: false
        }),

        context: ({req, res}) => ({req, res})
    });

    server.applyMiddleware({app, path:'/graphql'});
    return app;
}
    

