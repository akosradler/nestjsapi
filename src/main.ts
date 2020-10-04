import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validateEnv } from '../validateEnv';

async function bootstrap() {
  validateEnv();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
