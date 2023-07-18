import { Component, Input } from '@angular/core';
import { StudentDataService } from '../services/student-data.service'
import{StudentInfo} from '../student-info'

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent {
  
  studentDataResult:any =[];

  @Input() formValues : StudentInfo[] = [];
  constructor(private service: StudentDataService){}

  ngOnInit(){
    this.displayStudentDataService()
  }

  displayStudentDataService(){
    this.service.getData().subscribe((result)=>{
      console.log(result);
      this.studentDataResult=result;
    })
  }


  selectedItem?:StudentInfo;

  display = "none";

  onSelected(item:StudentInfo){
    this.selectedItem = item
    this.display = "block";
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

 
}
  

