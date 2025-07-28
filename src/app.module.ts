import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StorageModule } from './storagemodule/storage.module';
import { StorageInterface } from './storagemodule/storage.interface';
import { ThrottlerModule } from '@nestjs/throttler'

@Module({
  imports: [
    StorageModule,

    ThrottlerModule.forRootAsync({
    imports: [StorageModule],

    useFactory: (storage: StorageInterface) => {
      return {
        // At least one throttler is needed for the throttle guard to be used at all. These are just dummy values and won't be used.
        throttlers: [{ ttl: 60000, limit: Number.MAX_SAFE_INTEGER }],
        storage: storage
      }
    },
    inject: [StorageInterface]
  }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
