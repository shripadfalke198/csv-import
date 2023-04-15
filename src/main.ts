import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fileupload = require('express-fileupload')


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(fileupload())

  // app.useStaticAssets(join(__dirname, '../../client/dist'))
  await app.listen(3000);


}
bootstrap();
