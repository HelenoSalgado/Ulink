import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import config from './config';


const options = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(options);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // Ativar validação de erros no corpo da solicitação - class-validator
  app.useGlobalPipes(new ValidationPipe());
 
  // Remoção automática de propriedades sem decoradores - DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(config().port);
}
bootstrap();
