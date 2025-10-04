import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interfaces.dto';  // ✅ correct filename
import { CreateCustomerDto } from './dto/create.customer.dto';  // ✅ correct name

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(createCustomerDto: CreateCustomerDto): Customer {
    const newCustomer: Customer = {
      id: Date.now(), // generate unique ID
      ...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
