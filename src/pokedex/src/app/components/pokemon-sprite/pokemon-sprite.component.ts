import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-sprite',
  templateUrl: './pokemon-sprite.component.html',
  styleUrls: ['./pokemon-sprite.component.css']
})
export class PokemonSpriteComponent implements OnInit {
  @Input() id: number;
  
  constructor() { }

  ngOnInit() {
  }

}
