import { Injectable, Inject } from '@nestjs/common';
import {StorageInterface} from './storagemodule/storage.interface';

@Injectable()
export class AppService {
  constructor(@Inject(StorageInterface) private readonly storageService: StorageInterface) {
  }

  getHello(): string {
    return this.storageService.doSomething();  
  }
}
