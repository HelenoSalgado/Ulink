import { Test, TestingModule } from '@nestjs/testing';
import { ShortenLinkController } from './Controller';
import { ShortenLinkService } from './Service';

describe('AppController', () => {
  let appController: ShortenLinkController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShortenLinkController],
      providers: [ShortenLinkService],
    }).compile();

    appController = app.get<ShortenLinkController>(ShortenLinkController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      //expect(ShortenLinkController.getHello()).toBe('Hello World!');
    });
  });
});
