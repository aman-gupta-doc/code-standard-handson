import { Injectable } from '@nestjs/common';
import { UserInfoDTO } from './dtos/user-detail.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private joinNamesWithSpace(fn: string, mn: string, ln: string): string {
    return [fn, mn, ln].filter((name) => !!name).join(' ');
  }

  getInitialsWithFullName(userInfo: UserInfoDTO) {
    const fullName = this.joinNamesWithSpace(
      userInfo.firstName,
      userInfo.middleName,
      userInfo.lastName,
    );

    const fathersFullName = this.joinNamesWithSpace(
      userInfo.fatherFirstName,
      userInfo.fatherMiddleName,
      userInfo.fatherLastName,
    );

    const mothersFullName = this.joinNamesWithSpace(
      userInfo.motherFirstName,
      userInfo.motherMiddleName,
      userInfo.motherLastName,
    );

    const initials = this.joinNamesWithSpace(
      fullName.charAt(0),
      fathersFullName.charAt(0),
      mothersFullName.charAt(0),
    );

    return {
      fullName: fullName,
      fathersFullName: fathersFullName,
      mothersFullName: mothersFullName,
      initials: initials,
    };
  }
}
