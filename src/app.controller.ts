import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserInfoDTO } from './dtos/user-detail.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getInitialsWithFullName(@Body() userInfo: UserInfoDTO) {
    this.appService.getInitialsWithFullName(userInfo);
  }
}
