import express from 'express';
import path from 'path';
import 'express-async-errors';
import './database/connection';
import errorHandler from "./errors/handler";
import cors from "cors";

import routes from './routes';


const app = express ();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..', 'uploads')))
app.use(errorHandler);

app.listen(3333); //porta para visualizar o back localhost:3333