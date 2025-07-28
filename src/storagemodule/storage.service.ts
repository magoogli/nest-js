import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { StorageInterface } from './storage.interface';
import { ThrottlerStorageRecord } from '@nestjs/throttler/dist/throttler-storage-record.interface';

@Injectable()
export class StorageService implements StorageInterface, OnModuleInit, OnModuleDestroy {

  private initialized = false;

  constructor() {
    console.log('StorageService Constructed');
  }
 
  onModuleDestroy() {
    console.log('StorageService onModuleDestroy');
  }
  onModuleInit() {
    if (!this.initialized) {
      this.initialized = true;
      console.log('StorageService onModuleInit called');
    }
    else
    {
    throw new Error('onModuleInit called more than once.');

    }
  }

   doSomething(): string {
    return "Hi"
  }
  increment(key: string, ttl: number, limit: number, blockDuration: number, throttlerName: string): Promise<ThrottlerStorageRecord> {
    throw new Error('Method not implemented.');
  }
}
