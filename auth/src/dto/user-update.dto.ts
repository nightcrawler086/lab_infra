import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';
// Expected data object for a user signup
export class UpdateUserDTO {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;
}
