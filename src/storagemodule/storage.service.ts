import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { StorageInterface } from './storage.interface';
import { ThrottlerStorageRecord } from '@nestjs/throttler/dist/throttler-storage-record.interface';

@Injectable()
export class StorageService implements StorageInterface, OnModuleInit, OnModuleDestroy {
  constructor() {
    console.log('StorageService Constructed');
  }
  doSomething(): string {
    return "Hi"
  }
  increment(key: string, ttl: number, limit: number, blockDuration: number, throttlerName: string): Promise<ThrottlerStorageRecord> {
    throw new Error('Method not implemented.');
  }
  onModuleDestroy() {
    console.log('StorageService onModuleDestroy');
  }
  onModuleInit() {
    console.log('StorageService onModuleInit called');
  }
}
