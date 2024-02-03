import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

let products: any[] = [];

@Controller('products')
export class ProductsController {
    @Get('/')
    listProducts() {
        return {
            products
        };
    }

    @Get('/:id')
    getProduct(@Param('id') id: string ) {
        return {
            product: products.find(product => product.id === id)
        };
    }

    @Post('/')
    createProduct(@Body() body: any) {
        const newProduct = { ...body, id: uuidv4() };
        products.push(newProduct);
        return {
            newProduct
        };
    }
}
