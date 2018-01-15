import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css']
})
export class PokemonDescriptionComponent implements OnInit {
  @Input()
  public pokemon: { title: string, detail: string };
  constructor() { }

  ngOnInit() {
  }

}
