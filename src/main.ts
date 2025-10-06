import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable lifecycle hooks for shutdown (SIGINT, SIGTERM, etc.)
  app.enableShutdownHooks();

  // Apply global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,             // Remove properties not in the DTO
      forbidNonWhitelisted: true,  // Throw an error for unknown properties
      transform: true,             // Transform payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true, // Allow automatic type conversion
      },
    }),
  );

  // Start the server
  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`🚀 Application running on: http://localhost:${port}`);
}

bootstrap();
