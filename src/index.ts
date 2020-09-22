import 'reflect-metadata'
import { Query, Resolver, Mutation, Arg} from 'type-graphql'
import {connect} from './config/typeorm'
import {startServer} from './app'
import { RecipeResolver } from './dist/resolvers/RecipeResolver'
import { UserResolver} from './dist/resolvers/UserResolver'
import { CreateRecipe } from './dist/resolvers/CreateRecipe'
import { CreateUser } from './dist/resolvers/CreateUser'
import { CreateCategory } from './dist/resolvers/CreateCategory'

async function main () {
    connect();
    const app = await startServer();
    app.listen(3001);
    console.log('Server on Port', 3001);   
}

main();
