import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  public searchChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onchange(ev: KeyboardEvent) {
    const val = (ev.target as HTMLInputElement).value;
    this.searchChanged.emit(val);
  }

}
