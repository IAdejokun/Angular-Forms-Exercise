import { Component} from '@angular/core';
import { StudentDataService } from './services/student-data.service';
import { NgForm, FormGroup, FormControl } from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'studentDatabase';

  formData : any = {};

  newFormData = new FormGroup({
      id : new FormControl(''),
      name : new FormControl(''),
      course : new FormControl(''),
      department : new FormControl(''),
      age : new FormControl(''),
      numOfCredits : new FormControl(''),
      hostelName : new FormControl(''),
  })
  constructor(private service: StudentDataService){}

  newOnSubmit(){
    console.log(this.newFormData.value, '#newFormData');
    this.newFormData.reset();
  }
 
  onSubmit( form : NgForm){
    console.log(form.value);
    
  this.service.postData(form.value).subscribe({
    next : (res) =>{
      console.log(res);
    },
    error : (err) => {
      console.log(err);
    }
  })
    // form.resetForm();
  }
}
