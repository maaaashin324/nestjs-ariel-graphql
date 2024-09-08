import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './dto/student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  createStudent(@Args() createStudentInput: CreateStudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }
}
