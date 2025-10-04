import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create.customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerservice: CustomerService) {}

  @Get()
  getCustomer() {
    return this.customerservice.getAllCustomers();
  }

  @Post()
  addCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerservice.addCustomer(createCustomerDto);
  }
}
