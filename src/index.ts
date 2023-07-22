import  express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import 'dotenv/config';
import bodyParser from 'body-parser';
import {AppRouter} from './routes/index.js';
import errorHandler from './middleware/ErrorHandler.js';
import {graphqlHTTP} from 'express-graphql'
import { schema } from './schemas/schema.js';
import { root } from './utils/root/root.js';

dotenv.config()

const PORT = process.env.PORT ? process.env.PORT : 5000;
const HOST = process.env.HOST ? process.env.HOST : 'localhost';

export const app: Application = express();
const router = new AppRouter(app);

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root
}))
app.use(cors({
    origin: ["https://ticket-list",HOST],
    methods: ["GET", "POST", "PATCH", 'DELETE'],
    credentials: true,
    exposedHeaders: ['Authorization']
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router.init();
app.use(errorHandler);

const start = async () : Promise<void> => {
    try {
        app.listen(PORT, () => console.log(`Server start on http://${HOST}:${PORT}`));
    }
    catch (err) {
        console.log("Error: " + err);
    }
}
start();