import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdateFeedbackDto {
    @IsNotEmpty()
    @IsInt()
    rate: number;

    @IsNotEmpty()
    @IsString()
    message: string;
}
