import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private Students = [
    { id: 1, name: 'Ali', age: 23 },
    { id: 2, name: 'Aslam', age: 22 },
    { id: 3, name: 'Abass', age: 24 },
    { id: 4, name: 'Noman', age: 26 },
  ];

  // Get all students
  getAllStudents() {
    return this.Students;
  }

  // Get a student by ID
  getStudentById(id: number) {
    const student = this.Students.find((s) => s.id === id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  // Create a new student
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(), // unique ID
      name: data.name,
      age: data.age,
    };
    this.Students.push(newStudent);
    return newStudent;
  }

  // Replace student (PUT = full update)
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.Students.findIndex((s)=>s.id===id)
    if(index===-1) throw new NotFoundException('Student id not found')
        this.Students[index]={id,...data}
        return this.Students[index]
  }

  // Partial update student (PATCH)
  patchStudent(id: number, data: Partial<{ name: string; age: number }>)
  {
    const student=this.getStudentById(id);
    Object.assign(student,data)
    return this.Students
  }
  deleteStudent(id:number){
    const index = this.Students.findIndex((s)=>s.id===id)
    if(index===-1) throw new NotFoundException('Student id not found')
        const deleted=this.Students.splice(index,1)
    return { message: 'Student deleted', student: deleted[0] };

  }
}
