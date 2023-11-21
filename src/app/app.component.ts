import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Student } from '../model/Student';
import { LoginComponent } from './login/login.component';
//footer imported

import { FooterComponent } from './footer/footer.component';
import { StudentsComponent } from './students/students.component';
import { MenuComponent } from './menu/menu.component';
import { SortComponent } from './sort/sort.component';
import { AboutUsContactComponent } from './about-us-contact/about-us-contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponent, StudentsComponent, LoginComponent, MenuComponent, SortComponent, AboutUsContactComponent],//here added
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
}
