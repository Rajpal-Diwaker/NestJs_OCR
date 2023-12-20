// ocr.controller.ts
import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import * as fs from 'fs';
import { OcrService } from './ocr.service';

@Controller('ocr')
export class OcrController {
  constructor(private readonly ocrService: OcrService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file,
  ): Promise<{ text: string; filename: string }> {
    if (!file) {
      throw new BadRequestException('No image uploaded');
    }

    const imagePath = file.path;
    const text = await this.ocrService.recognizeText(imagePath);

    // Clear temporary upload
    fs.unlinkSync(imagePath);

    // Save text data to a timestamped text file
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const filename = `ocr_data_${timestamp}.txt`;

    fs.writeFileSync(`uploads/${filename}`, text);

    return { text, filename };
  }
}
