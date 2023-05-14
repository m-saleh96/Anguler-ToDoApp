import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent {
@Input() job:any
@Input() i:any
deleteLi(i:any){
  const myElement = document.getElementById(`${i}`);
  if (myElement) {
    myElement.remove();
  }
}
selectLi(i:any){
  const myElement = document.getElementById(`${i}`);
  if (myElement) {
    myElement.classList.toggle('sline');
  }
}
}
