import { Injectable, OnModuleInit, OnApplicationShutdown, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationBootstrap, OnApplicationShutdown {
  private isConnected = false;

  onModuleInit() {
    this.isConnected = true;
    console.log('Database Connected');
  }

  onApplicationBootstrap() {
    console.log('Application Bootstrap complete');
  }

  onApplicationShutdown(signal?: string) {
    this.isConnected = false;
    console.log(`Database is Disconnected due to app shutdown signal: ${signal}`);
  }

  getStatus() {
    return this.isConnected ? 'Database is Connected' : 'Database is Disconnected';
  }
}
