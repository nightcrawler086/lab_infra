import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger??
  const config = new DocumentBuilder()
    .setTitle('Auth API Doc')
    .setDescription('swagger for the auth microservice')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Input validation
  app.useGlobalPipes(new ValidationPipe())

  // Launch app
  await app.listen(3000);
}
bootstrap();
