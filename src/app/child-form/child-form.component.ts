import { Component ,EventEmitter,Output , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent {
  @Output() emitFromChild = new EventEmitter();
  @ViewChild('myInput') myInput:any = ElementRef;
  sendToParent(){
    this.emitFromChild.emit(this.myInput.nativeElement.value);
    this.myInput.nativeElement.value ="";
  }
}
