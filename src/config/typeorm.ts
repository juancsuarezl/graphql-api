import {createConnection} from 'typeorm';
import path from 'path';

export const connect = async () => {

    try{
        await createConnection ({

            type: 'mysql',
            host: 'localhost', 
            port: 3306,
            username: 'root',
            password: '',
            database: 'testDB',
            synchronize: true,
            entities: [
                path.join(__dirname, '../entity/**/**.ts')
            ]
        });
            console.log('Succesfull Connection to DB! ');
    
    } catch(error) {
        console.log(error);
        throw error;
    }
    
}
