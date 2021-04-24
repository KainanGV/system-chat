import { Router } from 'express';
import { MessagesController } from './controller/MessagesController';
import { SettingsController } from './controller/SettingsController';
import {UsersController} from './controller/UsersController';
//Definição de rotas, chamando a função por meio do meu controller
const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post('/users', usersController.create);
routes.post('/messages', messagesController.create);

routes.get('/messages/:id', messagesController.showByUser);

export { routes }