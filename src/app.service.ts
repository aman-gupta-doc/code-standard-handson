import { Injectable } from '@nestjs/common';
import { UserInfoDTO } from './dtos/user-detail.dto';
import { Response } from 'express'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getInitialsWithFullName(userInfo:UserInfoDTO){

    var type = 1

    var fullName = [userInfo.firstName, userInfo.middleName, userInfo.lastName].filter((name) => !!name).join(' ');



    // ToDo complete this
    var fathersFullName = ""

    var mothersFullName = ""

    var initials = ''

    // ToDo check if full name exist and get first letter of full name
    // write code here

    return {
      fullName: fullName,
      fathersFullName: fathersFullName,
      mothersFullName: mothersFullName,
      initials: initials
    }


    

  }
}
