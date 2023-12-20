// ocr.module.ts
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer';
import { OcrController } from './ocr.controller';
import { OcrService } from './ocr.service';

@Module({
  imports: [
    MulterModule.register({
      dest: 'uploads/',
    }),
  ],
  controllers: [OcrController],
  providers: [OcrService],
})
export class OcrModule {}
