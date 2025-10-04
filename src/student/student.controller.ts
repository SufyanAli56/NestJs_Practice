import { Body, Controller, Get, Param, Post, Patch, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentServices: StudentService) {}

  @Get()
  getAll() {
    return this.studentServices.getAllStudents();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentServices.getStudentById(id);
  }

  @Post()
  create(@Body() body: { name: string; age: number }) {
    return this.studentServices.createStudent(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { name: string; age: number }
  ) {
    return this.studentServices.updateStudent(id, body);
  }

  @Patch(':id')
  patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<{ name: string; age: number }>
  ) {
    return this.studentServices.patchStudent(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentServices.deleteStudent(id);
  }
}
