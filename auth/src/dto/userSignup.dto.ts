import { IsEmail, IsNotEmpty, Length } from 'class-validator';
// Expected data object for a user signup
class userSignupDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8, 16)
    password: string;
}

export { userSignupDTO };