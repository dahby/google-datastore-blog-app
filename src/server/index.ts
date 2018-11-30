process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import config from './config';
import initLogger from './logger';
import initDB from './db';
import initStorage from './storage';
import initModules from './modules';
import initApp from './app';

const logger = initLogger({ config: config.logger });
const gstore = initDB({ config: config.gcloud, logger });
const storage = initStorage({ config: config.gcloud });

// CREATE APP CONTEXT OBJECT

const context = { gstore, storage, logger, config };

// INSTANTIATE THE MODULES PROVIDING OUR CONTEXT OBJECT

const modules = initModules(context);

/**
 * Instantiate the Express App
 */
const app = initApp(context, modules);

// Start the server
logger.info('Starting server...');
logger.info(`Environment: "${config.common.env}"`);

app.listen(config.server.port, (error: any) => {
  if (error) {
    logger.error('Unable to listen for connection', error);
    process.exit(10);
  }

  logger.info(`Server started and listening on port ${config.server.port}`);
});
