import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/models/users.models';
import { OtherSchema } from 'src/models/otherdata.model';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'user',schema:UserSchema},{name:'otherdata',schema:OtherSchema}])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
