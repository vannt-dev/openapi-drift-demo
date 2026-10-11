import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // hence `prefix: /api` in the workflow
  await app.listen(3000);
}
void bootstrap();
