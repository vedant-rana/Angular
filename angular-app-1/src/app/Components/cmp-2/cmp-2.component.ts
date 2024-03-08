import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'hinv-cmp-2',
  standalone: true,
  imports: [],
  templateUrl: './cmp-2.component.html',
  styleUrl: './cmp-2.component.scss'
})
export class Cmp2Component {
  @Input() user!: any;
  @Output() sendToParent = new EventEmitter<User>();

  sendData() {
    this.sendToParent.emit({ name: this.user.name, salary: this.user.salary });
  }
}
