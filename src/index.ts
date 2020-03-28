import "reflect-metadata";
import { connect } from './config/typeorm';
import { startServer } from './app';

const PORT = '3000';

async function main() {
    connect();
    const app = await startServer();
    app.listen(PORT)
    console.log('server is running on port ' + PORT);
    
}

main();