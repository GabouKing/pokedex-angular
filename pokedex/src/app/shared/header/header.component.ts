import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  constructor() {}


  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
