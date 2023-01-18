import { IsNotEmpty, IsIn, MaxLength, IsDefined, IsString } from 'class-validator';

export class UserInfoDTO {
  @IsString()
  firstName: string;

  @IsString()
  middleName: string;

  @IsString()
  lastName: string;

  @IsString()
  fatherFirstName: string;

  @IsString()
  fatherMiddleName: string;

  @IsString()
  fatherLastName: string;

  @IsString()
  motherFirstName: string;

  @IsString()
  motherMiddleName: string;

  @IsString()
  motherLastName: string;
}
