import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategroiesModule } from './categroies/categroies.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';

@Module({
  imports: [EmployeeModule, CategroiesModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, ProductsController, MynameController, UserRolesController, ExceptionController],
  providers: [AppService,  ProductsService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
     consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
