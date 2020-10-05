import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validateEnv } from '../validateEnv';

declare const module: any;

async function bootstrap() {
  validateEnv();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
