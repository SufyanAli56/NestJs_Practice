import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products=[
        {id:1,name:"sufyan",price:2000},
        {id:2,name:"sufyan ali",price:4000},
        {id:3,name:"sufyan jutt",price:2400},
    ];
    getAllProducts()
    {
        return this.products
    }
    getProductById(id: number) {
        return this.products.find((product) => product.id === id);
      }
      
}
