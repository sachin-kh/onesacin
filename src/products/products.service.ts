import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from './interfaces/product.interface'


@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>
    ){}

    async create(createProductDto : CreateProductDto): Promise<Product>{
        const createdProduct = new this.productModel(CreateProductDto)
        return await createdProduct.save();
    }

    async findAll(): Promise<Product[]>{
        return await this.productModel.find().exec();
    }

    // async delete(productId:string): Promise<Product>{
    //     return await this.productModel.findByIdAndDelete(productId).exec();
    // }


}