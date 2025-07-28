import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageInterface } from './storage.interface';

@Module({
    providers: [{
        provide: StorageInterface,
        useClass: StorageService
    }],
    exports: [StorageInterface],
})
export class StorageModule {}