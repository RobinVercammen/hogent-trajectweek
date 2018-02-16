### Angular, Ngrx en Firebase als bouwstenen voor een fullstack reactive serverless applicatie

[www.involved-it.be](https://www.involved-it.be)



# 1990s  
## {Html}


```http
HTTP GET /
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /dashboard
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /products
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>



# 2000s  
## <i class="devicon-php-plain"></i>


```http
HTTP GET /
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /dashboard
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /products
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>



# 2010s  
## <i class="devicon-javascript-plain"></i>


```http
HTTP GET /
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /dashboard
```
## <i class="fa fa-table"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /products
```
## <i class="fa fa-table"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>



# <i class="fa fa-calendar-o"></i> Today
## <i class="devicon-angularjs-plain"></i><i class="devicon-react-original"></i><i class="devicon-backbonejs-plain"></i><i class="devicon-vuejs-plain"></i>



# <i class="devicon-angularjs-plain" style="font-size:5em;"></i>


## [angular cli](https://github.com/angular/angular-clihttps://github.com/facebookincubator/create-react-app)
```bash
ng new [name]
```


## Start vs Build
```bash
# start server (dev)
npm start 
# serve your own (prod)
npm run build
```


## Components
```typescript
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

```


## HttpClient
```typescript
this.http.get(`${this.baseUrl}/pokedex/2`).map(r => {
    const entries = ((r as any).pokemon_entries as any[]);
    const pokemons = entries.map(e => new PokemonListItem(e.entry_number, e.pokemon_species.name));
    return pokemons;
})
```


## Routing
```typescript
RouterModule.forRoot([{
      path: '',
      component: PokedexComponent,
      resolve: {
        'pokemons': PokemonListResolver
      },
      children: [
        {
          path: ':number',
          component: PokemonDescriptionComponent,
          resolve: {
            'pokemon': PokemonDescriptionResolver
          },
        }
      ]
    }]),
```  
```html
    <div *ngFor="let pokemon of pokemons"
        [routerLink]="['/', pokemon.id]"
        routerLinkActive="active"
        class="list-item">
    ...
    </div>
```


## Streams
```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingService {
    private loadingCount$ = new BehaviorSubject<number>(0);
    public loading$ = this.loadingCount$.asObservable().map(loadingCount => loadingCount > 0);

    startLoading() {
        const val = this.loadingCount$.value;
        this.loadingCount$.next(val + 1);
    }

    stopLoading() {
        const val = this.loadingCount$.value;
        this.loadingCount$.next(val - 1);
    }
}

```


## <i class="fa fa-server" style="font-size:5em;"></i> <span style="font-size:5em;">-</span>
[Firebase](https://console.firebase.google.com/)
```typescript
private getFavorites() {
    return this.db.collection('favorites').valueChanges();
}
```



# <i class="fa fa-comments-o" style="font-size:5em;"></i>