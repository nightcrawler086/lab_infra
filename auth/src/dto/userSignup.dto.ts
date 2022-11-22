import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
// Expected data object for a user signup
export class userSignupDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 16)
    password: string;
}
