import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
})
export class AppModule {}
