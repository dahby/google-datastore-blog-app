import Storage from '@google-cloud/storage';
import { Gstore } from 'gstore-node';
import { Logger } from 'winston';
import { Config } from './config/index';
import { BlogModule } from './modules/blog/index';
import { AdminModule } from './modules/admin/index';
import { ImagesModule } from './modules/images/index';
import { UtilsModule } from './modules/utils/index';

export type Context = {
  gstore: Gstore;
  storage: Storage;
  logger: Logger;
  config: Config;
};

export type AppModules = {
  blog: BlogModule;
  admin: AdminModule;
  images: ImagesModule;
  utils: UtilsModule;
};
