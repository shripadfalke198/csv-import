import { Controller, Get, Response, Post, Request, Body, NotFoundException} from '@nestjs/common';
import { UsersService } from './users.service';
// const indexFile = require('../users/')

@Controller('users')
export class UsersController {

    constructor(private readonly userService:UsersService){}
    // app.get('/',function(req,res){
    //     res.sendFile(__dirname+'/index.html')
    // })

    // @Get('/')
    // sendHtml(@Response() res){
    //     res.sendFile(__dirname+'/index.html')
    // }

    @Post('/insertcsv')
    async insertCsv(){
        const data = await this.userService.insertData()
        if(!data){
            return new Error('error')
        }
        return data
    }

    @Post('/getuser')
    async getuser(@Body('email') email:string){
        const user =await this.userService.getUser(email)
        if(!user){
            return new NotFoundException('no user found')
        }
        return user
    }

    @Get('/getuserwitha')
    async getUserwitha(@Body('str') str:string){
        const users = await this.userService.getall(str)
        return users
    }
}
