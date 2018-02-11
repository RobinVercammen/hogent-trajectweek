import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() favorite: boolean;
  @Output() favoriteChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onFavoriteChange() {
    this.favoriteChange.emit(!this.favorite);
  }
}
