import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  students:Student[]=[]
  percentages:any=[];
 constructor()
 {
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
 sortByPercentage()
 {
   this.percentages=this.students.sort((a, b) => a.percentage.toString().localeCompare(b.percentage.toString()));
 }
 sortByAttempts()
 {
   this.percentages=this.students.sort((a, b) => a.noOfAttempts.toString().localeCompare(b.noOfAttempts.toString()));
 }
 sortByNoOfsubLearning()
 {
   this.percentages=this.students.sort((a, b) => a.subjectLearning.length.toString().localeCompare(b.subjectLearning.length.toString()));

 }



}
