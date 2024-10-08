import {
  IsEmail,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class updateDto {
  @IsEmail()
  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, and one special character',
  })
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  bio: string;

  @IsOptional()
  @IsString()
  imageId: string;
}
