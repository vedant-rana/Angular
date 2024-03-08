import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cmp2Component } from '../cmp-2/cmp-2.component';
import { User } from '../../models/User';

@Component({
  selector: 'hinv-cmp-1',
  standalone: true,
  imports: [FormsModule, CommonModule, Cmp2Component],
  templateUrl: './cmp-1.component.html',
  styleUrl: './cmp-1.component.scss'
})
export class Cmp1Component {
  inputVal="Test"
  val2="test2"
  childData:User={name:"", salary:0}

users = [
  {name:"ramesh", isSingle:true, salary:10000},
  {name:"suresh", isSingle:true, salary:20000},
  {name:"nitesh", isSingle:true, salary:15000},
]

  handleChange = (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    this.inputVal = value;
  }

    recievedata(e:User){
    this.childData = e;
    }

}
