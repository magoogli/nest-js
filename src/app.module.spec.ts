import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module'

describe('AppModule', () => {

  describe('root', () => {
    it('should be able to init the app module', async () => {
      const app: TestingModule = await Test.createTestingModule({imports: [AppModule]}).compile();
      await app.init();
    });
  });
});
