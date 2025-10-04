import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // GET /products
  @UseGuards(AuthGuard)
  @Get()
  getProducts() {
    return this.productsService.getAllProducts();
  }

  // GET /products/:id
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getProductById(+id); // +id converts string → number
  }
}
