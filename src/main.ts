import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,           // Strip properties that are not in the DTO
      forbidNonWhitelisted: true,// Throw an error if non-whitelisted values are provided
      transform: true,           // Automatically transform payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true, // Allow simple type conversion (e.g., string -> number)
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
