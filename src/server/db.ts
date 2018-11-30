import Datastore from '@google-cloud/datastore';
import GstoreNode, { Gstore } from 'gstore-node';
import { Logger } from 'winston';
import { GcloudConfig } from './config/gcloud';

export default ({ config, logger }: { config: GcloudConfig; logger: Logger }): Gstore => {
  logger.info(`Instantiating Datastore instance for project "${config.projectId}"`);

  // CREATE A DATASTORE CLIENT INSTANCE

  const datastore = new Datastore({
    projectId: config.projectId,
    namespace: config.datastore.namespace,
  });

  // CREATE GSTORE INSTANCE

  const gstore = GstoreNode({ cache: true });

  // CONNECT GSTORE TO THE GOOGLE DATASTORE INSTANCE

  logger.info('Connecting gstore-node to Datastore');
  gstore.connect(datastore);

  return gstore;
};
