import { ThrottlerStorage } from '@nestjs/throttler'

export interface StorageInterface extends ThrottlerStorage {
    doSomething(): string;
}

export const StorageInterface = Symbol('StorageInterface');