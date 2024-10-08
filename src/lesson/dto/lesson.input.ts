import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID], { defaultValue: [] })
  studentIds: string[];
}

@InputType()
export class AssignStudentsToLessonInput {
  @Field((type) => ID)
  @IsUUID('4')
  lessonId: string;

  @Field((type) => [ID])
  @IsUUID('4', { each: true })
  studentIds: string[];
}
