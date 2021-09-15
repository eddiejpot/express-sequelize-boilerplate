import { resolve } from 'path';
import db from './models/index.mjs';

// ========================================================== IMPORT CONTROLLERS
import initExampleController from './controllers/exampleController.mjs';

// =============================================================== EXPORT ROUTES
export default function apiRoutes(app) {
  const exampleController = initExampleController(db);

  //===================================== SET ROUTES

  // example
  app.get('/api/stores', exampleController.index);

  // misc
  app.get('/', (request, response) => {
    response.send('API');
  });
}
