import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import config from './config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import * as requestIp  from 'request-ip';


const options = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors(options);

  app.use(requestIp.mw())

  // Ativar documentação automática da API
  const configApi = new DocumentBuilder()
    .setTitle('Short Link and Analytics')
    .setDescription('Testando')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, configApi);
  SwaggerModule.setup('api', app, document);


  // Remoção automática de propriedades sem decoradores - DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

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

  app.useStaticAssets(path.join(__dirname, './public/'));

  await app.listen(config.port);
  console.log(`🏁 Application is running on: ${await app.getUrl()} 🚀`);
}
bootstrap();
