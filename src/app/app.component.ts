import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm!:FormGroup
  title = 'angular-validation';
  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder) {
    
  }
  
  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName:["" , Validators.required]
    })
    
  }




}
