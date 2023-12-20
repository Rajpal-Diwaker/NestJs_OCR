// main.ts
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { OcrModule } from './ocr/ocr.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(OcrModule);
  app.useStaticAssets('uploads/', { prefix: '/uploads' });

  await app.listen(5001);
}

bootstrap();
