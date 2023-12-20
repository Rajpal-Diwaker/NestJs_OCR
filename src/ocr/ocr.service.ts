// ocr.service.ts
import { Injectable } from '@nestjs/common';
import { recognize } from 'tesseract.js';

@Injectable()
export class OcrService {
  async recognizeText(imagePath: string): Promise<string> {
    const result = await recognize(imagePath, 'eng');
    console.log('result', result);
    return result.data.text;
  }
}
