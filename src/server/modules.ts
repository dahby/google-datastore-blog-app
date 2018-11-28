import initUtilsModule from './modules/utils';
import initAdminModule from './modules/admin';
import initBlogModule from './modules/blog';
import initImagesModule from './modules/images';
import { AppModules } from './models';

export default (): AppModules => {
  /**
   * Initialize our module by passing the context & each module dependencies
   */
  const utils = initUtilsModule();
  const admin = initAdminModule();
  const images = initImagesModule();
  const blog = initBlogModule();

  return {
    utils,
    admin,
    images,
    blog,
  };
};
