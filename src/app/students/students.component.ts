import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
students:Student[]=[]

message:string='';
colorClass:string='';

constructor(){
  let s1= new Student(1, "aa" ,2, 80,["java","python"])
  let s2= new Student(2, "bb" ,5, 89,["java","python"])
  let s3= new Student(3, "cc" ,4, 87,["java","python"])
  let s4= new Student(4, "dd" ,1, 83,["java","python"])
  let s5= new Student(5, "ee" ,3, 80,["java","python"])
 this.students.push(s1)
 this.students.push(s2)
 this.students.push(s3)
 this.students.push(s4)
 this.students.push(s5)

}
deleteStudent(rollno:number){
  const result =confirm("want to delete Student roll no. = "+ rollno)
  if(result){
  this.students = this.students.filter(s=> s.rollno!= rollno)
  this.message= 'record Deleted';
  this.colorClass='success'
}
  else{
    this.message='cancelled';
    this.colorClass='error'; // this all happening in inspect element ,student- span 
  }

}
updateStudent(s:Student){
  console.log(s);//look in inspect then console
  

}

showStudents(){


}
}
