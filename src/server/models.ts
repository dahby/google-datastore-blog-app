import { BlogModule } from './modules/blog/index';
import { AdminModule } from './modules/admin/index';
import { ImagesModule } from './modules/images/index';
import { UtilsModule } from './modules/utils/index';

export type AppModules = {
  blog: BlogModule;
  admin: AdminModule;
  images: ImagesModule;
  utils: UtilsModule;
};
