import { Controller, Get, Post, Delete, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { Roles } from "src/auth/roles.decorator";


@Controller('products')
export class ProductsController{
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin', 'customer', 'supporter')
    @Get()
    getAllProdcuts(){

    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin', 'seller')
    @Post()
    addProduct(){

    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin', 'seller')
    @Delete()
    deleteProduct(){

    }


}