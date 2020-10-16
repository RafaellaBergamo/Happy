
import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import Multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = Multer(uploadConfig);

routes.post('/orphanages', upload.array('images'),OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id',OrphanagesController.show);

export default routes;