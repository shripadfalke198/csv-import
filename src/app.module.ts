import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [UsersModule,MongooseModule.forRoot('mongodb://0.0.0.0:27017/csvimport'),
  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
