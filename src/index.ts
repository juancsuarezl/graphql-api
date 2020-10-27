import 'reflect-metadata';
import { Query, Resolver, Mutation, Arg} from 'type-graphql';
import {connect} from './config/typeorm';
import {startServer} from './app';

async function main () {
    connect();
    const app = await startServer();
    app.listen(3001);
    console.log('Server running on PORT: 3001');   
}

main();
