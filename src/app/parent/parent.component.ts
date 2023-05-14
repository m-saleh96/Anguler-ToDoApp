import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  jobs:any[] =[];
  reciveFromChild(job : any){
    this.jobs.push(job)
    console.log(this.jobs);
    
  }
}
