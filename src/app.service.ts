import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // eslint-disable-next-line prettier/prettier
    return 'goodbye world\ankonia';
  }
}
