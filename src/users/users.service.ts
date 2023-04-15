import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Error } from 'mongoose';
const csv = require('fast-csv');
const ObjectId = require('mongoose').Types.ObjectId; 
const csv11=require('csvtojson')


@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel,
    @InjectModel('otherdata') private readonly otherdataModel,
    ){}

    async insertData(){
        let mockFile ='C:\\Users\\Shripad\\Downloads\\MOCK_DATA.csv'
        let usersWithEmail = [];
        let usersWithoutEmail = [];
        
        await csv11({
            noheader:true,
            flatKeys:true
        })
        .fromFile(mockFile)
        // .on('data',(data)=>{
        //     //data is a buffer object
        //     const jsonStr= data.toString('utf8')
        //     console.log(jsonStr)
        // })
        // .on('done',()=>{
        //     //do some stuff
        //     return 'done!!!!!!!!!!!!!!!'
        // })
        // return 'done!!!!!!!!!!!!!!!'
        .then(async (jsonObj)=>{
            for(let i=0;i<jsonObj.length;i++){
                if (!jsonObj[i].field3) {
                    usersWithoutEmail.push(jsonObj[i])
                }else {
                    jsonObj[i].field1 = jsonObj[i].field1+' '+jsonObj[i].field2
                    usersWithEmail.push(jsonObj[i])
                    await this.userModel.create({"username" : jsonObj[i].field1, "phone" : jsonObj[i].field5, "email" : jsonObj[i].field3 })
                    await this.otherdataModel.create({"email" : jsonObj[i].field3 ,"fieldOne" : jsonObj[i].field4 ,"fieldTwo" : jsonObj[i].field6})
                }
            }
        })
        return {
            "total User Entered with email" : usersWithEmail.length,
            "tota User Not Entered without email" : usersWithoutEmail.length
        }
    }

    async getUser(email:string){
        const user = await this.userModel.findOne({email :email})
        console.log(user)
        return user
    }

    async getall(str:string){
        const str1 = '/^'+str+'/' //  { $regex: /^A/, $options: 'm' }
        const user = await this.userModel.find({username : { $regex: str1, $options: 'm' }})
        // console.log(reg)
        return user
    }

}
