import path from 'path';
import { Request, Response, NextFunction, Express } from 'express';
import { Context, AppModules } from './models';

export default (
  { logger, config }: Context,
  { app, modules: { blog, admin } }: { app: Express; modules: AppModules }
) => {
  // WEB ROUTES

  app.use('/blog', (_, res) => {
    res.send('Hello!');
  });

  // 404 PAGE NOT FOUND

  app.get('/404', (_, res) => {
    res.render(path.join(__dirname, 'views', '404'));
  });

  // DEFAULT ROUTE '/blog'

  app.get('*', (_, res) => res.redirect('/blog'));

  // ERROR HANDLING

  app.use((err: any, _: Request, res: Response, next: NextFunction) => {
    const payload = (err.output && err.output.payload) || err;
    const statusCode = (err.output && err.output.statusCode) || 500;

    logger.error(payload);

    return res.status(statusCode).json(payload);
  });
};
